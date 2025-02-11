import React, { useState } from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import '../../style/MyBlog/CommentSection.scss';

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  const addComment = (text) => {
    const newComment = {
      id: comments.length + 1,
      text,
      likes: 0,
      replies: [],
      isSecret: false,
      profileImage: 'https://via.placeholder.com/50',
    };
    setComments([...comments, newComment]);
  };

  const updateComments = (updatedComments) => {
    setComments(updatedComments);
  };

  return (
    <div className="comment-section">
      <h2>댓글</h2>
      <CommentInput onSubmit={addComment} />
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} comments={comments} updateComments={updateComments} />
      ))}
    </div>
  );
};

export default CommentSection;
