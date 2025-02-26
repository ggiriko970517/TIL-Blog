import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "animate.css"; // 애니메이션 CSS 추가
import "../style/page/Signup.scss";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");  // nickname → username으로 변경

    const navigate = useNavigate();

    const handleSignup = async () => {
        // 클라이언트 측 유효성 검사 추가
        if (!email || !password || !username) {
            alert("모든 필드를 입력해주세요!");
            return;
        }

        if (password.length < 8) {
            alert("비밀번호는 최소 8자 이상이어야 합니다.");
            return;
        }

        try {
            // API 요청
            await axios.post("http://localhost:8080/auth/signup", {
                email,
                password,
                username,  // nickname → username으로 변경
            });

            alert(`${username}님, 회원가입이 완료되었습니다!`);
            navigate("/login");
        } catch (error) {
            if (error.response) {
                alert(`회원가입 실패: ${error.response.data.message}`);
            } else {
                alert("회원가입 중 오류가 발생했습니다.");
            }
        }
    };

    return (
        <div className="signup-overlay">
            <div className="signup-container animate__animated animate__fadeInUpBig">
                <button className="close-btn " onClick={() => navigate("/")}>✖</button>
                <div className="signup-header">
                    <img src="/common/myImage.png" alt="Welcome" className="welcome-image" />
                    <h2>회원가입</h2>
                </div>
                <div className="signup-form">
                    <input
                        type="text"
                        placeholder="사용자 이름"  // 닉네임 → 사용자 이름
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        maxLength={50}  // 최대 50자 제한
                    />
                    <input
                        type="email"
                        placeholder="이메일"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="비밀번호 (최소 8자)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="signup-button" onClick={handleSignup}>회원가입</button>
                </div>
                <div className="login-link">
                    이미 계정이 있으신가요?{" "}
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/login"); }}>로그인</a>
                </div>
            </div>
        </div>
    );
};

export default Signup;
