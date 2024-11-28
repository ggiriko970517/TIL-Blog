import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';
import myImage from '../assets/myImage.png'; // PNG 이미지 파일 import

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    // 회원가입 로직 추가 필요 시 구현
  };

  const handleCancel = () => {
    navigate('/login');
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="signup-popup">
      <div className="signup-content">
        <button className="close-button" onClick={handleClose}>×</button>
        <div className="signup-container">
          <div className="welcome-section">
            <h1>환영합니다!</h1>
            <img src={myImage} alt="Welcome" className="welcome-image" />
          </div>
          <div className="signup-section">
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">이메일로 회원가입</label>
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
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              <div className="input-group">
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="비밀번호를 다시 입력하세요."
                  required
                />
              </div>
              <div className="button-group">
                <button type="submit">회원가입</button>
                <button type="button" className="cancel-button" onClick={handleCancel}>취소</button>
              </div>
            </form>
            <p>소셜 계정으로 로그인</p>
            <div className="social-icons">
              <button className="social-button google">Google</button>
              <button className="social-button naver">Naver</button>
              <button className="social-button kakao">Kakao</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
