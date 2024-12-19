import React from 'react';
import '../../styles/MyBlog/SideBar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="profile-picture"></div>
        <div className="profile-info">
          <p>거북이</p>
          <p>안녕하세요 ^^ 블로그입니다.</p>
        </div>
      </div>
      <div className="categories">
        <h3>카테고리</h3>
        <ul>
          <li>카테고리 1</li>
          <li>카테고리 2</li>
          <li>카테고리 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
