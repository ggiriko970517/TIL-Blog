import React, { useState } from 'react';
import '../styles./Blogintro.scss';

const Blogintro = () => {
  const [isEditing, setIsEditing] = useState(false); // 편집 모드 상태
  const [introText, setIntroText] = useState('안녕하세요^^\n초보 블로그 입니다.\n잘 부탁합니다~!'); // 기본 소개글

  const maxCharCount = 200; // 글자 수 제한

  const handleEditClick = () => setIsEditing(true); // 편집 모드 활성화
  const handleSaveClick = () => setIsEditing(false); // 편집 모드 비활성화

  const handleTextChange = (e) => {
    if (e.target.value.length <= maxCharCount) {
      setIntroText(e.target.value);
    }
  };

  return (
    <div className="blogintro">
      <h3 className="title">소개글</h3>

      {!isEditing ? (
        <div className="intro-display">
          <p>{introText || '소개글을 작성해주세요.'}</p>
          <button className="edit-btn" onClick={handleEditClick}>
            Edit
          </button>
        </div>
      ) : (
        <div className="intro-edit">
          <textarea
            value={introText}
            onChange={handleTextChange}
            placeholder="소개글을 작성하세요."
          ></textarea>
          <div className="char-count">{introText.length}/{maxCharCount}</div>
          <button className="save-btn" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogintro;
