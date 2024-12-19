import React, { useState } from 'react';

const ReplyInput = ({ onSubmit }) => {
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      onSubmit(replyText);
      setReplyText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        placeholder="대댓글 입력"
      />
      <button onClick={handleReplySubmit}>대댓글 등록</button>
    </div>
  );
};

export default ReplyInput;
