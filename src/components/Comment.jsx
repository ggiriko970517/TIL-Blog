import React, { useState } from 'react';
import Reply from './Reply';
import ReplyInput from './ReplyInput';
import '../styles/Comment.scss';

const Comment = ({ comment, comments, updateComments }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const toggleLike = () => {
    const updatedComments = comments.map((c) =>
      c.id === comment.id ? { ...c, likes: c.likes + 1 } : c
    );
    updateComments(updatedComments);
  };

  const toggleSecret = () => {
    const updatedComments = comments.map((c) =>
      c.id === comment.id ? { ...c, isSecret: !c.isSecret } : c
    );
    updateComments(updatedComments);
  };

  const deleteComment = () => {
    const updatedComments = comments.filter((c) => c.id !== comment.id);
    updateComments(updatedComments);
  };

  const addReply = (replyText) => {
    const updatedComments = comments.map((c) => {
      if (c.id === comment.id) {
        return {
          ...c,
          replies: [
            ...c.replies,
            {
              id: c.replies.length + 1,
              text: replyText,
              likes: 0,
              isSecret: false,
              profileImage: 'https://via.placeholder.com/50',
            },
          ],
        };
      }
      return c;
    });
    updateComments(updatedComments);
    setShowReplyInput(false);
  };

  return (
    <div className="comment-container">
      <img className="comment-profile" src={comment.profileImage} alt="프로필" />
      <div className="comment-content">
        <strong>익명</strong>
        <p>{comment.isSecret ? '비밀 댓글입니다.' : comment.text}</p>

        <button className="like-button" onClick={toggleLike}>
          <i className="fa-regular fa-heart"></i> ({comment.likes})
        </button>

        <button
          onClick={() => setShowOptions(!showOptions)}
          className="more-button"
        >
          <i className="fa-solid fa-ellipsis"></i>
        </button>

        {showOptions && (
          <div className="more-options">
            <button onClick={() => setShowReplyInput(!showReplyInput)}>답글 작성</button>
            <button onClick={toggleSecret}>{comment.isSecret ? '비밀 해제' : '비밀로 하기'}</button>
            <button onClick={deleteComment}>삭제</button>
            <button onClick={() => alert("신고 접수")}>신고</button>
          </div>
        )}

        {showReplyInput && <ReplyInput onSubmit={addReply} />}
        
        {comment.replies.map((reply) => (
          <Reply key={reply.id} reply={reply} comment={comment} comments={comments} updateComments={updateComments} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
