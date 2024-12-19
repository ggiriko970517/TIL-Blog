import React from 'react';
import HeaderBar from '../components/Common/HeaderBar.jsx';
import SideBar from '../components/MyBlog/SideBar';
import Content from '../components/MyBlog/Content';
import '../styles/MyBlog/MyBlog.scss';
import Footer from '../components/Common/Footer';

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