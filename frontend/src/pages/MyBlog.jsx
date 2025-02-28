import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Profile from "../components/MySetting/Profile";
import Content from "../components/MyBlog/Content";
import "../style/MyBlog/MyBlog.scss";
import SiteFooter from "../components/SiteFooter";
import axios from "axios";

const API_URL = "http://localhost:8080/posts/my"; // ✅ 본인이 작성한 글만 조회하는 API
const IMAGE_BASE_URL = "http://localhost:8080"; // ✅ 이미지 기본 경로

const MyBlog = () => {
  const { postId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const token = localStorage.getItem("token"); // ✅ JWT 토큰 가져오기
        if (!token) {
          alert("로그인이 필요합니다.");
          window.location.href = "/login";
          return;
        }

        const response = await axios.get(API_URL, {
          headers: { Authorization: `Bearer ${token}` }, // ✅ 토큰 추가
        });

        // ✅ 썸네일 URL 앞에 `localhost:8080` 붙이기
        const postsWithFullUrls = response.data.map((post) => ({
          ...post,
          mediaUrl: post.mediaUrl ? `${IMAGE_BASE_URL}${post.mediaUrl}` : null,
        }));

        setPosts(postsWithFullUrls);
      } catch (error) {
        console.error("Error fetching my posts:", error);
      }
    };

    fetchMyPosts();
  }, []);

  // 특정 postId가 있으면 해당 포스트만 필터링
  const filteredPosts = postId
    ? posts.filter((post) => post.postId === parseInt(postId))
    : posts;

  return (
    <div>
      <div className="main-container">
        <Profile />
        <div className="content-wrapper">
          <Content posts={filteredPosts} />
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default MyBlog;
