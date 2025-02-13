import React, { useState } from "react";
import "../style/page/Signup.scss";

const SignupLogo = "/common/myImage.png";

const Signup = ({ onClose, onOpenLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSignup = () => {
    if (email && password && nickname) {
      alert(`${nickname}님, ${email}로 회원가입이 완료되었습니다!`);
      onClose(); // 회원가입 완료 후 모달 닫기
      onOpenLogin(); // 로그인 모달 열기
    } else {
      alert("입력되지 않았습니다!");
    }
  };

  return (
    <div className="signup-overlay" onClick={onClose}>
      <div className="signup-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <div className="signup-header">
          <img src={SignupLogo} alt="Welcome" className="welcome-image" />
          <h2>회원가입</h2>
        </div>
        <div className="signup-form">
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
          <button className="signup-button" onClick={handleSignup}>
            회원가입
          </button>
        </div>
        <div className="login-link">
          이미 계정이 있으신가요?{" "}
          <a href="#" onClick={(e) => { e.preventDefault(); onOpenLogin(); }}>
            로그인
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;




