import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/page/Signup.scss";

const SignupLogo = '/common/myImage.png'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (email && password && nickname) {
      alert(`${nickname}님, ${email}로 회원가입이 완료되었습니다!`);
      navigate("/login"); // 회원가입 후 로그인 페이지로
    } else {
      alert("입력되지 않았습니다!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <button className="close-btn">✖</button>
        <div className="signup-header">
          <div className="profile-icon">
            <img
              src={SignupLogo}
              alt="Welcome"
              className="welcome-image"
            />
          </div>
          <h2>회원가입</h2>
        </div>
        <div className="signup-input">
          <input
            type="text"
            placeholder="닉네임을 입력하세요."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <input
            type="email"
            placeholder="이메일을 입력하세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signup-btn" onClick={handleSignup}>
            회원가입
          </button>
        </div>
        <div className="login-link">
          이미 계정이 있으신가요? <a href="/login">로그인</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;



