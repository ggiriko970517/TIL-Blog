import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import myImage from '../assets/myImage.png'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직 추가 필요 시 구현
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="login-popup">
      <div className="login-content">
        <button className="close-button" onClick={handleClose}>×</button>
        <div className="login-container">
          <div className="welcome-section">
            <h1>환영합니다!</h1>
            <img src={myImage} alt="Welcome" className="welcome-image" />
          </div>
          <div className="login-section">
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">이메일로 로그인</label>
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일을 입력하세요."
                  required
                />
              </div>
              <label htmlFor="password">비밀번호</label>
              <div className="input-group">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요."
                  required
                />
              </div>
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

export default LoginPage;
