import React, { useState } from "react";
import "../style/component/Header.scss";
import Logo from "./common/logo.png";
import { faBell, faBook, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(3); // 예: 3개의 읽지 않은 메시지

  return (
    <header className="header">
      {/* 로고 */}
      <div className="header-logo">
        <img src={Logo} alt="header-logo-image" />
      </div>

      {/* 검색창 */}
      <div className="header-search">
        <input type="text" placeholder="태그, 타이틀 검색" />
      </div>

      {/* 아이콘 컨테이너 */}
      <div className="icon-container">
        {/* 알림 아이콘 */}
        <div className="header-icon header-notifications">
          <FontAwesomeIcon icon={faBell} id="alarm-icon" />
          {unreadMessages > 0 && <span className="badge">{unreadMessages}</span>}
        </div>

        {/* 새 글쓰기 아이콘 */}
        <div className="header-icon">
          <FontAwesomeIcon icon={faBook} id="posting-icon" />
        </div>

        {/* 프로필 드롭다운 */}
        <div className="header-profile" onClick={() => setIsProfileOpen(!isProfileOpen)}>
        <i class="fa-solid fa-user"></i>
          {isProfileOpen && (
            <div className="dropdown">
              <a href="/my-blog">My Blog</a>
              <a href="/bookmarks">북마크</a>
              <a href="/settings">설정</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setIsLoginOpen(true); }}>
                로그인
              </a>
              <a href="/logout">로그아웃</a>
            </div>
          )}
        </div>

        {/* 설정 메뉴 */}
        <div className="header-settings" onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
          <FontAwesomeIcon icon={faBars} id="threebar-icon" />
          {isSettingsOpen && (
            <div className="dropdown">
              <a href="/theme">화면테마</a>
              <a href="/notices">공지사항</a>
            </div>
          )}
        </div>
      </div>

      {/* 로그인 모달 */}
      {isLoginOpen && (
        <Login
          onClose={() => setIsLoginOpen(false)}
          onOpenSignup={() => {
            setIsLoginOpen(false);
            setIsSignupOpen(true);
          }}
        />
      )}

      {/* 회원가입 모달 */}
      {isSignupOpen && (
        <Signup
          onClose={() => setIsSignupOpen(false)}
          onOpenLogin={() => {
            setIsSignupOpen(false);
            setIsLoginOpen(true);
          }}
        />
      )}
    </header>
  );
};

export default Header;

