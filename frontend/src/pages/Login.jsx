import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "animate.css"; // 애니메이션 CSS 추가
import "../style/page/Login.scss";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:8080/auth/login", { email, password });
            const { token, userID, userName } = response.data;

            onLogin(token, userID, email, userName);
            navigate("/");
        } catch (error) {
            setError("로그인에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <div className="login-modal">
            <div className="login-modal-overlay" onClick={() => navigate("/")}></div>
            <div className="login-modal-content animate__animated animate__fadeInUpBig">
                <button className="close-btn" onClick={() => navigate("/")}>
                    &times;
                </button>
                <div className="login-form">
                    <img src="./components/common/myImage.png" alt="Logo" className="login-logo" />
                    <h2>로그인</h2>
                    <input
                        type="email"
                        placeholder="이메일을 입력하세요"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button className="login-btn" onClick={handleLogin}>로그인</button>
                    <p>
                        계정이 없으신가요?{" "}
                        <button className="signup-link" onClick={() => navigate("/signup")}>
                            회원가입
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
