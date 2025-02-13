import React from 'react';
import '../../style/MyBlog/SideBar.scss';

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

    </div>
  );
};

export default Sidebar;
