import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

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
        style={{ width: '400px',
          height: '40px',
          padding: '10px',
          fontSize: '16px' }}
      />
      <Button variant="primary" onClick={handleReplySubmit}>대댓글 등록</Button>
    </div>
  );
};

export default ReplyInput;
