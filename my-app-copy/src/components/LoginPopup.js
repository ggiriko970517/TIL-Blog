import React from 'react';
import './LoginPopup.css';

const LoginPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="login-container">
          <div className="welcome-section">
            <h1>환영합니다!</h1>
            {/* Replace with any image as needed */}
            <img src="https://via.placeholder.com/150" alt="Welcome" />
          </div>
          <div className="login-section">
            <h2>로그인</h2>
            <form>
              <label htmlFor="email">이메일로 로그인</label>
              <input type="email" id="email" placeholder="이메일을 입력하세요." />
              <button type="submit">로그인</button>
            </form>
            <p>소셜 계정으로 로그인</p>
            <div className="social-icons">
              <button className="social-button google">Google</button>
              <button className="social-button naver">Naver</button>
              <button className="social-button kakao">Kakao</button>
            </div>
            <p>
              아직 회원이 아니신가요? <a href="/signup">회원가입</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
