import React from 'react';
import Header from '../components/Header.jsx';
import Profile from '../components/MySetting/Profile';
import Content from '../components/MyBlog/Content';
import '../style/MyBlog/MyBlog.scss';
import Footer from '../components/Footer';

const MyBlog = ({ posts }) => (
    <div>
        <div className="main-container">
            <Profile />
            <div className="content-wrapper">
                <Content posts={posts} />
            </div>
        </div>
    </div>
);

export default MyBlog;
