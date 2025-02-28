import React, { useState } from "react";
import CommentSection from "./CommentSection";
import "../../style/MyBlog/Content.scss";

const Content = ({ posts }) => {
  // 각 포스트마다 댓글 상태 관리
  const [commentsByPost, setCommentsByPost] = useState({});

  // 특정 포스트의 댓글 상태 업데이트 함수
  const updateComments = (postId, updatedComments) => {
    setCommentsByPost({
      ...commentsByPost,
      [postId]: updatedComments,
    });
  };

  // 단일 포스트인지 확인
  const isSinglePost = posts.length === 1;

  return (
    <div className={`content ${isSinglePost ? "single-post-view" : ""}`}>
      {posts.length === 0 ? (
        <p>포스팅이 없습니다.</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="post">
            <h2>{post.title}</h2>
            <img
              src={post.mediaUrl}
              alt="포스팅 썸네일"
              className="post-thumbnail"
            />
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            {/* 댓글 섹션 추가 */}
            <CommentSection
              comments={commentsByPost[post.postId] || []}
              updateComments={(updatedComments) =>
                updateComments(post.postId, updatedComments)
              }
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Content;
