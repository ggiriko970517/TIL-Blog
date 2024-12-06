import React, { useState } from 'react';
import './Post.scss';

const Post = () => {
  const [likeCount, setLikeCount] = useState(10);
  const [commentCount, setCommentCount] = useState(10);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');

  const likePost = () => {
    setLikeCount(likeCount + 1);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };
git bentText, time: '방금 전' }]);
      setCommentCount(commentCount + 1);
      setCommentText('');
    }
  };

  return (
    <div className="post">
      <h1>포스트 제목 dddddd</h1>
      <div className="post-header">
        <img src="profile.jpg" alt="Profile Picture" width="50" />
        <span>작성자</span>
        <span>2024.10.16</span>
        <button>팔로우</button>
      </div>
      <div className="post-tags">
        <span>태그1</span>
        <span>태그2</span>
        <span>태그3</span>
      </div>
      <p>포스트 내용</p>
      <div className="post-actions">
        <div className="like-button" onClick={likePost}>
          <span>❤️</span>
          <span className="notification">{likeCount}</span>
        </div>
        <div className="comment-button" onClick={toggleComments}>
          <span>💬</span>
          <span className="notification">{commentCount}</span>
        </div>
      </div>
      {showComments && (
        <div className="comments-section">
          <h2>{commentCount}개의 댓글</h2>
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="댓글을 작성하세요"
          />
          <button onClick={postComment}>댓글 등록</button>
          <div className="comments">
            {comments.map((comment, index) => (
              <div key={index}>
                <span>{comment.user}</span>
                <span>{comment.time}</span>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
