import React from 'react';
import HeaderBar from '../components/HeaderBar';
import SideBar from '../components/SideBar';
import Content from '../components/Content';
import '../styles/MyBlog/MyBlog.scss';
import Footer from '../components/Footer';

const MyBlog = () => (
  <div>
    <HeaderBar />
    <div className="main-container">
      <SideBar />
      <div className="content-wrapper">
        <Content />
        {/* <div className="blog-footer">
          <Footer />
        </div> */}
      </div>
    </div>
  </div>
);

export default MyBlog;