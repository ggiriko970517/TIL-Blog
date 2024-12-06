import React, { useState } from 'react';
import './Profile.scss';
import State from './State'; // State 컴포넌트 가져오기

const Profile = () => {
  const [image, setImage] = useState(null); // 프로필 이미지 상태

  // 이미지 등록 처리
  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // 파일 선택
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // 이미지 경로를 상태에 저장
      };
      reader.readAsDataURL(file); // 파일을 읽어 base64로 변환
    }
  };

  // 이미지 삭제 처리
  const handleImageDelete = () => {
    setImage(null); // 이미지 삭제
  };

  return (
    <div className="profile">
      <div className="profile-image">
        {image ? (
          <img src={image} alt="Profile" className="profile-img" />
        ) : (
          <div className="no-image">No Image</div>
        )}
      </div>

      {/* 프로필 등록 버튼 */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        id="upload-input"
        className="upload-input"
      />
      <div className="button-container">
        <button
          className="upload-btn"
          onClick={() => document.getElementById('upload-input').click()}
        >
          프로필 등록
        </button>

        {/* 프로필 삭제 버튼 */}
        <button className="delete-btn" onClick={handleImageDelete}>
          프로필 삭제
        </button>
      </div>

      <State />
    </div>
  );
};

export default Profile;
