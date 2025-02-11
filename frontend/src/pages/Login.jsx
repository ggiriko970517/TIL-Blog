import React from "react";
import "../style/page/Login.scss";

const Login = ({ onClose, onOpenSignup }) => {
  return (
    <div className="login-modal">
      <div className="login-modal-overlay" onClick={onClose}></div>
      <div className="login-modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="login-form">
          <img src="/path/to/logo.png" alt="Logo" className="login-logo" />
          <h2>로그인</h2>
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            className="input-field"
          />
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="input-field"
          />
          <button className="login-btn">로그인</button>
          <p>
            계정이 없으신가요?{" "}
            <button className="signup-link" onClick={onOpenSignup}>
              회원가입
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


