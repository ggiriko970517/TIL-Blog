import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Content from '../components/Content';
import '../styles/MyBlog.scss';

const MyBlog = () => (
  <div className="app">
    <Header />
    <div className="main-container">
      <SideBar />
      <div className="content-wrapper">
        <Content />
      </div>
    </div>
  </div>
);

export default MyBlog;