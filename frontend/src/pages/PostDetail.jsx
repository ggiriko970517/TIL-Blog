import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../style/PostDetail/PostDetail.scss";
import SiteFooter from "../components/SiteFooter";

const BASE_URL = "http://localhost:8080/posts";
const IMAGE_BASE_URL = "http://localhost:8080"; // ✅ 이미지 경로 기본 URL 추가

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${postId}`);
        console.log("response.data:", response.data);
        setPost(response.data);
      } catch (error) {
        console.error("게시글을 불러오는 중 오류 발생:", error);
        alert("게시글을 찾을 수 없습니다.");
        navigate("/"); // 오류 발생 시 홈으로 이동
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId, navigate]);

  if (loading) return <div className="loading">로딩 중...</div>;
  if (!post) return <div className="error">게시글을 찾을 수 없습니다.</div>;

  // ✅ 썸네일 URL 가공
  const fullMediaUrl = post.mediaUrl
    ? `${IMAGE_BASE_URL}${post.mediaUrl}`
    : null;

  return (
    <div className="post-detail">
      <div className="post-header">
        <h1 className="post-title">{post.title}</h1>
      </div>
      {fullMediaUrl && (
        <div className="post-thumbnail">
          <img src={fullMediaUrl} alt="썸네일" />
        </div>
      )}
      <div className="post-content">
        <ReactQuill value={post.content} readOnly={true} theme="bubble" />
      </div>
      <SiteFooter />
    </div>
  );
};

export default PostDetail;
