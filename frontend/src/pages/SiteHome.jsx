import React, { useEffect, useState, useCallback } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/page/SiteHome.scss";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DefaultImage from "../components/common/Image_Not_Found.png";
import DefaultProfile from "../components/common/profile.png";
import { debounce } from "lodash";
import SiteFooter from "../components/SiteFooter";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaComment } from "react-icons/fa";

const API_URL = "http://localhost:8080/posts/top-likes";
const RECENT_POSTS_API_URL = "http://localhost:8080/posts/recent";
const MEDIA_API_URL = "http://localhost:8080/media";
const LIKE_API_URL = "http://localhost:8080/likes";

const getMediaUrl = async (mediaId) => {
  try {
    const response = await axios.get(`${MEDIA_API_URL}/${mediaId}`);
    const filePath = response.data.filePath;
    return filePath ? `http://localhost:8080${filePath}` : DefaultImage;
  } catch (error) {
    console.error(`Error fetching media with ID ${mediaId}:`, error);
    return DefaultImage;
  }
};

const fetchPosts = async (url) => {
  try {
    const token = localStorage.getItem("token"); // ✅ 토큰 가져오기
    const headers = token ? { Authorization: `Bearer ${token}` } : {}; // ✅ 토큰이 있으면 헤더 추가

    const response = await axios.get(url, { headers });
    const posts = response.data;

    const postsWithThumbnails = await Promise.all(
      posts.map(async (post) => {
        const thumbnailUrl = post.mediaId
          ? await getMediaUrl(post.mediaId)
          : DefaultImage;

        return {
          ...post,
          thumbnailUrl: post.mediaUrl
            ? `http://localhost:8080${post.mediaUrl}`
            : DefaultImage,
          profileImage: post.profileImage
            ? `http://localhost:8080${post.profileImage}`
            : DefaultProfile,
        };
      })
    );

    console.log("postsWithThumbnails:", postsWithThumbnails);

    return postsWithThumbnails;
  } catch (error) {
    console.error(`Error fetching posts from ${url}:`, error);
    return [];
  }
};

function SiteHome() {
  const [topPosts, setTopPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pageSize = 8;
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
    fetchPosts(API_URL).then(setTopPosts);
  }, []);

  useEffect(() => {
    fetchPosts(
      `${RECENT_POSTS_API_URL}?page=${currentPage}&size=${pageSize}&title=${searchTerm}`
    ).then(setRecentPosts);
  }, [currentPage, searchTerm]);

  const debouncedSearch = useCallback(debounce(setSearchTerm, 500), []);

  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`); // ✅ 상세 페이지로 이동
  };

  const toggleLike = async (postId, likedByUser, likeCount) => {
    const userId = localStorage.getItem("userID"); // ✅ 로컬 스토리지에서 가져오기
    if (!userId) {
      alert("로그인이 필요합니다.");
      window.location.href = "/login";
      return;
    }

    try {
      let newLikeStatus = !likedByUser;
      let newLikeCount = likedByUser ? likeCount - 1 : likeCount + 1;

      // ✅ 좋아요 API 요청 (백엔드에서 자동으로 추가/삭제 처리)
      await axios.post(`${LIKE_API_URL}`, {
        postId,
        userId: parseInt(userId),
      });

      // ✅ 상태 업데이트 (좋아요 여부 및 카운트 반영)
      setRecentPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.postId === postId
            ? { ...post, likedByUser: newLikeStatus, likeCount: newLikeCount }
            : post
        )
      );
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (
    <div className="site-home">
      <div className="contents-container">
        <div className="contents-area">
          <div className="top-carousel">
            <Carousel interval={3000} pause={false}>
              {topPosts.map((post) => (
                <Carousel.Item key={post.id}>
                  <img
                    className="d-block w-100"
                    src={post.thumbnailUrl}
                    alt={post.title}
                  />
                  <Carousel.Caption>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          <div className="bottom-carousel">
            <div className="search-bar">
              <input
                type="text"
                className="search-input"
                placeholder="게시글을 검색하세요..."
                onChange={(e) => debouncedSearch(e.target.value)}
              />
            </div>

            <div className="feed-layout">
              {recentPosts.map((post) => (
                <div
                  key={post.postId}
                  className="feed-card"
                  onClick={() => handlePostClick(post.postId)}
                >
                  <img
                    className="feed-thumbnail"
                    src={post.thumbnailUrl}
                    alt={post.title}
                  />
                  <div className="feed-content">
                    <h6>{post.title}</h6>
                    <div className="feed-user-info">
                      <img
                        className="profile-image"
                        src={post.profileImage}
                        alt={post.nickname}
                      />
                      <span className="nickname">{post.nickname}</span>
                    </div>
                    <div className="feed-stats">
                      <span
                        className="likes"
                        style={{
                          cursor: isLoggedIn ? "pointer" : "not-allowed",
                          color: post.likedByUser ? "red" : "black", // ✅ likedByUser 값으로 색상 결정
                        }}
                        onClick={(e) => {
                          e.stopPropagation(); // 이벤트 전파 방지
                          if (isLoggedIn) {
                            toggleLike(
                              post.postId,
                              post.likedByUser,
                              post.likeCount
                            );
                          }
                        }}
                      >
                        {post.likedByUser ? <FaHeart /> : <FaRegHeart />}{" "}
                        {post.likeCount}
                      </span>
                      <span className="comments">
                        <FaComment style={{ marginRight: "5px" }} />{" "}
                        {post.commentCount}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination">
              <button
                className="arrow-button left"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                ←
              </button>
              <button
                className="arrow-button right"
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                →
              </button>
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    </div>
  );
}

export default SiteHome;
