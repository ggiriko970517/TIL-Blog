import React, { useState } from 'react';
import '../../style/MySetting/Bloginfo.scss';

const Bloginfo = () => {
  const [blogName, setBlogName] = useState("내 블로그");
  const [isEditable, setIsEditable] = useState(false);
  
  // ✅ 비밀번호 변경 관련 상태
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="blog-info">
      {/* 블로그 이름 변경 */}
      <div className="blog-detail">
        <label>블로그 명:</label>
        <input
          type="text"
          value={blogName}
          onChange={(e) => setBlogName(e.target.value)}
          readOnly={!isEditable}
        />
      </div>

      {/* 비밀번호 변경 */}
      <div className="blog-detail">
        <label>비밀번호</label>
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "취소" : "변경"}
        </button>
      </div>

      {/* ✅ 버튼을 클릭하면 비밀번호 입력칸이 보이도록 설정 */}
      {showPassword && (
        <div className="blog-detail">
          <input
            type="password"
            placeholder="새 비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => alert(`새 비밀번호: ${password}`)}>저장</button>
        </div>
      )}
    </div>
  );
};

export default Bloginfo;
