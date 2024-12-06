import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.scss';

function Signuppage() {
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
  
    const handleClose = () => {
      navigate('/');
    };
  
    return (
      <div className="signup-popup" style={{ width: '500px', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)', backgroundColor: 'white', margin: '0 auto', position: 'relative', top: '100px' }}>
        <button className="close-button" onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'black' }}>×</button>
        <div className="signup-container" style={{ display: 'flex' }}>
          <div className="welcome-section" style={{ flex: '1', padding: '20px', textAlign: 'center' }}>
            <img src={`${process.env.PUBLIC_URL}/images/myImage.png`} alt="Welcome" className="welcome-image" style={{ width: '80px', height: '80px', marginBottom: '10px' }} />
            <h1 style={{ fontSize: '1.5rem' }}>환영합니다!</h1>
          </div>
          <div className="signup-section" style={{ flex: '2', padding: '20px' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>회원가입</h2>
            <form onSubmit={handleSubmit} className="signup-form" style={{ marginBottom: '20px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>이메일로 회원가입</label>
              <div className="input-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일을 입력하세요."
                  required
                  style={{ flex: '1', padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </div>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>비밀번호</label>
              <div className="input-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요."
                  required
                  style={{ flex: '1', padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </div>
              <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px' }}>비밀번호 확인</label>
              <div className="input-group" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="비밀번호를 다시 입력하세요."
                  required
                  style={{ flex: '1', padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </div>
              <button type="submit" className="signup-button" style={{ padding: '10px 20px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>회원가입</button>
            </form>
            <p style={{ marginBottom: '10px' }}>소셜 계정으로 회원가입</p>
            <div className="social-icons" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
              <button className="social-button naver" style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', cursor: 'pointer' }}>N</button>
              <button className="social-button google" style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', cursor: 'pointer' }}>G</button>
              <button className="social-button kakao" style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', cursor: 'pointer' }}>K</button>
            </div>
            <p className="login-message" style={{ textAlign: 'center' }}>
              이미 회원이신가요? <Link to="/login" className="login-link" style={{ color: '#4caf50', textDecoration: 'none' }}>로그인</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Signuppage;