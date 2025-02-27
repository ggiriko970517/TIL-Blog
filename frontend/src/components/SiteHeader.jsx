import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/component/SiteHeader.scss';
import Logo from '../components/common/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook } from '@fortawesome/free-solid-svg-icons';

const SiteHeader = ({ isLoggedIn, handleLogout }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    // 드롭다운 메뉴 토글
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    // 드롭다운 외부 클릭 시 닫힘 처리
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.profile-dropdown')) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="header-container">
            <div className="logo animate__animated animate__bounce">
                <Link to="/">
                    <img src={Logo} alt="header-logo-image"/>
                </Link>
            </div>

            <div className="nav-buttons">
                <Link to="/write" className="nav-button">
                    <FontAwesomeIcon icon={faBook} id="posting-icon"/>
                </Link>

                {isLoggedIn ? (
                    <div className={`profile-dropdown ${dropdownVisible ? 'active' : ''}`}>
                        <FontAwesomeIcon
                            icon={faUser}
                            className="profile-icon"
                            onClick={toggleDropdown}
                        />
                        <div className="dropdown">
                            <Link to="/myblog">My Blog</Link>
                            <Link to="/settings">설정</Link>
                            <Link to="/login" onClick={handleLogout} className="logout-button">
                                로그아웃
                            </Link>
                        </div>
                    </div>
                ) : (
                    <Link to="/login" className="login-button">
                        <button className="login-btn">로그인</button>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default SiteHeader;

