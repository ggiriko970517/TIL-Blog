import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/component/SiteHeader.scss';
import Logo from '../components/common/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook } from '@fortawesome/free-solid-svg-icons';


const SiteHeader = ({ isLoggedIn, handleLogout, profileImage }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    // 프로필 이미지 클릭 시 드롭다운 메뉴를 토글하는 함수
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <header className="header-container">
            <div className="logo animate__animated animate__bounce">
                <Link to="/"><img src={Logo} alt="header-logo-image"/></Link>
            </div>

            <div className="nav-buttons">
                <Link to="/write" className="nav-button">
                    <FontAwesomeIcon icon={faBook} id="posting-icon"/>
                </Link>

                {isLoggedIn ? (
                    <div className="profile-dropdown">
                        <FontAwesomeIcon icon={faUser} id="profile-icon " onClick={toggleDropdown} />
                        {dropdownVisible && (
                            <div className="dropdown">
                                <Link to="/my-blog">My Blog</Link>
                                <Link to="/settings">설정</Link>
                                <button onClick={handleLogout} className="logout-button">로그아웃</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login" className="login-button"><button className="login-btn">로그인</button></Link>
                )}
            </div>
        </header>
    );
};

export default SiteHeader;
