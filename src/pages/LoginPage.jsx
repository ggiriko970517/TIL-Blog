import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login/Style.scss';

const LoginLogo = './common/myImage.png'

function Loginpage() {
    // 이메일 상태 관리
    const [email, setEmail] = useState('');

    // 비밀번호 상태 관리
    const [password, setPassword] = useState('');

    // 페이지 이동을 위한 네비게이션
    const navigate = useNavigate();

    // 로그인 버튼 클릭 시 호출되는 함수
    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: 로그인 로직 추가
    };

    // 팝업 닫기 버튼 클릭 시 호출되는 함수
    const handleClose = () => {
        navigate('/');
    };

    return (
        <div
            className="login-popup"
            style={{
                width: '500px',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
                backgroundColor: 'white',
                margin: '0 auto',
                position: 'relative',
                top: '100px',
            }}
        >
            {/* 팝업 닫기 버튼 */}
            <button
                className="close-button"
                onClick={handleClose}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    color: 'black',
                }}
            >
                ×
            </button>

            <div
                className="login-container"
                style={{
                    display: 'flex',
                }}
            >
                {/* 환영 메시지 섹션 */}
                <div
                    className="welcome-section"
                    style={{
                        flex: '1',
                        padding: '20px',
                        textAlign: 'center',
                    }}
                >
                    <img
                        src={LoginLogo}
                        alt="Welcome"
                        className="welcome-image"
                        style={{
                            width: '80px',
                            height: '80px',
                            marginBottom: '10px',
                        }}
                    />
                    <h1 style={{ fontSize: '1.5rem' }}>환영합니다!</h1>
                </div>

                {/* 로그인 입력 섹션 */}
                <div
                    className="login-section"
                    style={{
                        flex: '2',
                        padding: '20px',
                    }}
                >
                    <h2
                        style={{
                            fontSize: '1.25rem',
                            marginBottom: '10px',
                        }}
                    >
                        로그인
                    </h2>

                    {/* 로그인 폼 */}
                    <form
                        onSubmit={handleSubmit}
                        className="login-form"
                        style={{
                            marginBottom: '20px',
                        }}
                    >
                        <label
                            htmlFor="email"
                            style={{
                                display: 'block',
                                marginBottom: '5px',
                            }}
                        >
                            이메일로 로그인
                        </label>
                        <div
                            className="input-group"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '15px',
                            }}
                        >
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="이메일을 입력하세요."
                                required
                                style={{
                                    flex: '1',
                                    padding: '10px',
                                    marginRight: '10px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                }}
                            />
                        </div>
                        <label
                            htmlFor="password"
                            style={{
                                display: 'block',
                                marginBottom: '5px',
                            }}
                        >
                            비밀번호
                        </label>
                        <div
                            className="input-group"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '15px',
                            }}
                        >
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="비밀번호를 입력하세요."
                                required
                                style={{
                                    flex: '1',
                                    padding: '10px',
                                    marginRight: '10px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="login-button"
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#4caf50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            로그인
                        </button>
                    </form>

                    {/* 소셜 로그인 버튼 */}
                    <p
                        style={{
                            marginBottom: '10px',
                        }}
                    >
                        소셜 계정으로 로그인
                    </p>
                    <div
                        className="social-icons"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            marginBottom: '20px',
                        }}
                    >
                        <button
                            className="social-button naver"
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            N
                        </button>
                        <button
                            className="social-button google"
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            G
                        </button>
                        <button
                            className="social-button kakao"
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            K
                        </button>
                    </div>

                    {/* 회원가입 안내 메시지 */}
                    <p
                        className="signup-message"
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        아직 회원이 아니신가요?{' '}
                        <Link
                            to="/signup"
                            className="signup-link"
                            style={{
                                color: '#4caf50',
                                textDecoration: 'none',
                            }}
                        >
                            회원가입
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Loginpage;