import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogEditor from './pages/BlogEditor';
import MySetting from './pages/MySetting';
import MyBlog from './pages/MyBlog';
import SiteHeader from './components/SiteHeader';
import SiteHome from './pages/SiteHome';
import SiteFooter from './components/SiteFooter';
import Login from './pages/Login';
import Signup from './pages/Signup';
import axios from 'axios';

const POST_API_URL = 'http://localhost:8080/posts';

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
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // ✅ 로그인 상태 관리
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = (token, userID, email, userName) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userID', userID);
    localStorage.setItem('email', email);
    localStorage.setItem('userName', userName);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    localStorage.removeItem('email');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
  };

  // ✅ 새로운 포스팅 추가 함수
  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
      <div className="App">
        <Router>
          <SiteHeader isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<SiteHome />} />
            <Route path="/write" element={<BlogEditor addPost={addPost} />} />
            <Route path="/myblog" element={<MyBlog posts={posts} />} />
            {/* ✅ 개별 포스트 상세 페이지 라우팅 추가 */}
            <Route
                path="/myblog/:postId"
                element={<MyBlog posts={posts} />}
            />
            <Route path="/settings" element={<MySetting />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;

