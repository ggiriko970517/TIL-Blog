import React, { useState } from 'react';

const CommentInput = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = () => {
    if (inputText.trim()) {
      onSubmit(inputText);
      setInputText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="댓글을 입력하세요"
        style={{ width: '400px', height: '40px', padding: '10px', fontSize: '16px' }} // 크기 조절 스타일
      />
      <button onClick={handleSubmit}>댓글 등록</button>
    </div>
  );
};

export default CommentInput;
