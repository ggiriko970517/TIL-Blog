import React, { useState } from "react";
import "../styles/PostBlog.scss";

// 아이콘 추가 (간단히)
import { FaThumbsUp, FaComment, FaLock } from "react-icons/fa";

const PostBlog = () => {
  const [likes, setLikes] = useState(10);
  const [comments, setComments] = useState([
    { id: 1, text: "미친놈인가?ㅋㅋ", likes: 0, isPrivate: false },
  ]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [tags, setTags] = useState(["고기", "이쁜하게", "비빔", "레시피"]);

  // 좋아요 버튼 클릭 핸들러
  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  // 댓글 추가 핸들러
  const addComment = () => {
    if (commentText.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), text: commentText, likes: 0, isPrivate },
      ]);
      setCommentText("");
      setIsPrivate(false); // 댓글 등록 후 초기화
    }
  };

  // 댓글 좋아요 버튼 클릭 핸들러
  const handleCommentLike = (commentId) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
  };

  // 구독 버튼 클릭 핸들러
  const handleSubscription = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className="post-blog">
      {/* 블로그 헤더 */}
      <div className="post-header">
        <h1>둘이 먹다 하나 죽어도 모르는 비밀 레시피 비빔밥!</h1>
        <div className="user-info">
          <img
            src="https://via.placeholder.com/50"
            alt="user-profile"
            className="user-profile"
          />
          <div className="user-details">
            <span className="username">비빔인간</span>
            <span className="post-date">2024.10.16</span>
          </div>
          <button
            className={`follow-button ${isSubscribed ? "subscribed" : ""}`}
            onClick={handleSubscription}
          >
            {isSubscribed ? "구독 취소" : "구독"}
          </button>
        </div>
      </div>

      {/* 태그 */}
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>

      {/* 콘텐츠 */}
      <div className="post-content">
        <button className="like-button" onClick={handleLike}>
          <FaThumbsUp /> 좋아요 {likes}
        </button>
        <p>살짝 데친 콩나물에 뜨끈한 밥, 양조간장 뿌려 비벼서 먹자~</p>
      </div>

      {/* 댓글 섹션 */}
      <div className="post-comments">
        <h3>
          댓글 ({comments.length}) <FaComment />
        </h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="comment-item">
              <p>{comment.isPrivate ? <FaLock /> : null} {comment.text}</p>
              <button
                className="comment-like-button"
                onClick={() => handleCommentLike(comment.id)}
              >
                👍 {comment.likes}
              </button>
            </li>
          ))}
        </ul>

        {/* 댓글 입력 */}
        <div className="comment-input">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="댓글을 작성하세요"
          />
          <div className="comment-options">
            <label>
              <input
                type="checkbox"
                checked={isPrivate}
                onChange={() => setIsPrivate(!isPrivate)}
              />
              비밀 댓글
            </label>
            <button onClick={addComment}>댓글 등록</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBlog;