import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogEditor from "./pages/BlogEditor";
import MySetting from "./pages/MySetting";
import MyBlog from "./pages/MyBlog";
import SiteHeader from "./components/SiteHeader";
import SiteHome from "./pages/SiteHome";
import SiteFooter from "./components/SiteFooter";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import axios from "axios";
import PrivateRoute from "./components/PrivateRoute";
import PostDetail from "./pages/PostDetail";

const POST_API_URL = "http://localhost:8080/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ 포스팅 데이터 불러오기
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(POST_API_URL);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // ✅ 로그인 상태 관리
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = (token, userID, email, userName) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userID", userID);
    localStorage.setItem("email", email);
    localStorage.setItem("userName", userName);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    localStorage.removeItem("email");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
  };

  // ✅ 새로운 포스팅 추가 함수
  const addPost = async (newPost) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("로그인이 필요합니다.");
        return;
      }

      const userId = localStorage.getItem("userID");

      const postData = {
        title: newPost.title,
        content: newPost.content,
        userId: parseInt(userId, 10), // userId는 숫자로 변환
        thumbnailUrl: newPost.thumbnailUrl,
      };

      const response = await axios.post(POST_API_URL, postData, {
        headers: {
          Authorization: `Bearer ${token}`, // JWT 토큰 추가
          "Content-Type": "application/json",
        },
      });

      console.log("새로운 포스트 추가 성공:", response.data);
      setPosts((prevPosts) => [response.data, ...prevPosts]);
    } catch (error) {
      console.error("포스트 추가 중 오류 발생:", error.response?.data || error);
    }
  };

  return (
    <div className="App">
      <Router>
        <SiteHeader isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<SiteHome />} />
          <Route
            path="/write"
            element={
              <PrivateRoute>
                <BlogEditor addPost={addPost} /> {/* ✅ addPost 전달 */}
              </PrivateRoute>
            }
          />
          <Route
            path="/myblog"
            element={
              <PrivateRoute>
                <MyBlog posts={posts} />
              </PrivateRoute>
            }
          />
          {/* ✅ 개별 포스트 상세 페이지 라우팅 추가 */}
          <Route path="/myblog/:postId" element={<MyBlog posts={posts} />} />
          <Route path="/settings" element={<MySetting />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/posts/:postId" element={<PostDetail />} />{" "}
          {/* ✅ 추가 */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
