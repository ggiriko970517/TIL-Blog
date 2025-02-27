import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../components/MySetting/Profile';
import Content from '../components/MyBlog/Content';
import '../style/MyBlog/MyBlog.scss';
import SiteFooter from '../components/SiteFooter';
import axios from 'axios';

const API_URL = 'http://localhost:8080/posts';

const MyBlog = () => {
    const { postId } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(API_URL);
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    // 특정 postId가 있으면 해당 포스트만 필터링
    const filteredPosts = postId ? posts.filter(post => post.postId === parseInt(postId)) : posts;

    return (
        <div>
            <div className="main-container">
                <Profile />
                <div className="content-wrapper">
                    <Content posts={filteredPosts} />
                </div>
            </div>
            <SiteFooter/>
        </div>
    );
};

export default MyBlog;





