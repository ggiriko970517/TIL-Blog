import React, { useState } from "react";
import "../../styles/Home/Header.scss";
import { faBell, faBook, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Logo = "./common/logo.png"

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(3); // 예: 3개의 읽지 않은 메시지

  return (
    <header className="header">

      {/* 로고 */}
     
      <div className="header-logo"><img src={Logo} alt="header-logo-image"/></div>
      

      {/* 검색창 */}
      <div className="header-search">
        <input type="text" placeholder="태그, 타이틀 검색" />
      </div>

      {/* 알림 아이콘 */}
    <div className="icon-container">

      <div className="header-icon header-notifications">
        <i className="fas fa-bell">
        <FontAwesomeIcon icon={faBell} id="alarm-icon" />
        </i>
        {unreadMessages > 0 && <span className="badge">{unreadMessages}</span>}
      </div>
      

      {/* 새 글쓰기 아이콘 */}
      <div className="header-icon">
        <i className="fas fa-pen">
        <FontAwesomeIcon icon={faBook} id="posting-icon"/>
        </i>
      </div>


      {/* 프로필 드롭다운 */}
      <div className="header-profile"
        onClick={() => setIsProfileOpen(!isProfileOpen)}
      >
        <img
          src="https://via.placeholder.com/40" // 임시 프로필 이미지
          alt="User Profile"
        />
        {isProfileOpen && (
          <div className="dropdown">
            <a href="/my-blog">My Blog</a>
            <a href="/bookmarks">북마크</a>
            <a href="/settings">설정</a>
            <a href="/logout">로그아웃</a>
          </div>
        )}
      </div>

      {/* 설정 메뉴 */}
      <div
        className="header-settings"
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
      >
        <i className="fas fa-bars">
        <FontAwesomeIcon icon={faBars} id="threebar-icon" />
        </i>
        {isSettingsOpen && (
          <div className="dropdown">
            <a href="/theme">화면테마</a>
            <a href="/notices">공지사항</a>
          </div>
        )}
      </div>
    </div>  
    </header>
  );
};

export default Header;