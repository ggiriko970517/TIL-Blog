import React from 'react';

const Reply = ({ reply, comment, comments, updateComments }) => {
  const toggleLike = () => {
    const updatedComments = comments.map((c) =>
      c.id === comment.id
        ? {
            ...c,
            replies: c.replies.map((r) =>
              r.id === reply.id ? { ...r, likes: r.likes + 1 } : r
            ),
          }
        : c
    );
    updateComments(updatedComments);
  };

  const toggleSecret = () => {
    const updatedComments = comments.map((c) =>
      c.id === comment.id
        ? {
            ...c,
            replies: c.replies.map((r) =>
              r.id === reply.id ? { ...r, isSecret: !r.isSecret } : r
            ),
          }
        : c
    );
    updateComments(updatedComments);
  };

  const deleteReply = () => {
    const updatedComments = comments.map((c) =>
      c.id === comment.id
        ? {
            ...c,
            replies: c.replies.filter((r) => r.id !== reply.id),
          }
        : c
    );
    updateComments(updatedComments);
  };

  return (
    <div style={{ marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
      <img src={reply.profileImage} alt="프로필" style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '10px' }} />
      <div>
        <p>{reply.isSecret ? '비밀 댓글입니다.' : reply.text}</p>
        <button onClick={toggleLike}>좋아요 ({reply.likes})</button>
        <button onClick={toggleSecret}>{reply.isSecret ? '비밀 해제' : '비밀로 하기'}</button>
        <button onClick={deleteReply}>삭제</button>
        <button onClick={() => alert("신고 접수")}>신고</button>
      </div>
    </div>
  );
};

export default Reply;
