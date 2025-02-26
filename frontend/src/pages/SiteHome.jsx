import React, { useEffect, useState, useCallback } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/page/SiteHome.scss';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DefaultImage from '../components/common/Image_Not_Found.png';
import DefaultProfile from '../components/common/profile.png';
import { debounce } from 'lodash';
import SiteFooter from '../components/SiteFooter';

const API_URL = 'http://localhost:8080/posts/top-likes';
const RECENT_POSTS_API_URL = 'http://localhost:8080/posts/recent';
const LIKE_API_URL = 'http://localhost:8080/likes';

const fetchPosts = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data.map(post => ({
            ...post,
            thumbnailUrl: post.mediaUrl ? `http://localhost:8080${post.mediaUrl}` : DefaultImage,
            profileImage: post.profileImage ? `http://localhost:8080${post.profileImage}` : DefaultProfile
        }));
    } catch (error) {
        console.error(`Error fetching posts from ${url}:`, error);
        return [];
    }
};

function SiteHome() {
    const [topPosts, setTopPosts] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const pageSize = 8;

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem('token'));
        fetchPosts(API_URL).then(setTopPosts);
    }, []);

    useEffect(() => {
        fetchPosts(`${RECENT_POSTS_API_URL}?page=${currentPage}&size=${pageSize}&title=${searchTerm}`).then(setRecentPosts);
    }, [currentPage, searchTerm]);

    const debouncedSearch = useCallback(debounce(setSearchTerm, 500), []);

    const toggleLike = async (postId, likedByUser, likeCount) => {
        if (!isLoggedIn) {
            alert('로그인이 필요합니다.');
            window.location.href = '/login';
            return;
        }

        try {
            if (likedByUser) {
                await axios.delete(`${LIKE_API_URL}/post/${postId}/user/37`);
            } else {
                await axios.post(LIKE_API_URL, { postId, userId: 37 });
            }
            setRecentPosts(prevPosts =>
                prevPosts.map(post =>
                    post.postId === postId ? { ...post, likedByUser: !likedByUser, likeCount: likedByUser ? likeCount - 1 : likeCount + 1 } : post
                )
            );
        } catch (error) {
            console.error('Error toggling like:', error);
        }
    };

    return (
        <div className="site-home">
            <div className="contents-container">
                <div className="contents-area">
                    <div className="top-carousel">
                        <Carousel interval={3000} pause={false}>
                            {topPosts.map(post => (
                                <Carousel.Item key={post.id}>
                                    <img className="d-block w-100" src={post.thumbnailUrl} alt={post.title} />
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
                            <input type="text" className="search-input" placeholder="게시글을 검색하세요..." onChange={e => debouncedSearch(e.target.value)} />
                        </div>

                        <div className="feed-layout">
                            {recentPosts.map(post => (
                                <div key={post.postId} className="feed-card">
                                    <img className="feed-thumbnail" src={post.thumbnailUrl} alt={post.title} />
                                    <div className="feed-content">
                                        <h6>{post.title}</h6>
                                        <div className="feed-user-info">
                                            <img className="profile-image" src={post.profileImage} alt={post.nickname} />
                                            <span className="nickname">{post.nickname}</span>
                                        </div>
                                        <div className="feed-stats">
                                            <span className="likes" style={{ cursor: isLoggedIn ? 'pointer' : 'not-allowed', color: post.likedByUser ? 'red' : 'black' }} onClick={() => isLoggedIn && toggleLike(post.postId, post.likedByUser, post.likeCount)}>
                                                {post.likedByUser ? '❤️' : '🤍'} {post.likeCount}
                                            </span>
                                            <span className="comments">💬 {post.commentCount}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pagination">
                            <button className="arrow-button left" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>←</button>
                            <button className="arrow-button right" onClick={() => setCurrentPage(prev => prev + 1)}>→</button>
                        </div>
                    </div>
                </div>
                <SiteFooter/>
            </div>
        </div>
    );
}

export default SiteHome;
