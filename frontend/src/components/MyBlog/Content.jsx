// Content.jsx (MyBlog.jsx)
import React, { useState, useEffect } from 'react';
import CommentSection from './CommentSection';
import '../../style/MyBlog/Content.scss';

const Content = () => {
  // 최근 포스트 상태 관리
  const [recentPosts, setRecentPosts] = useState([
    {
      title: '첫 번째 포스트',
      content: '첫 번째 포스트 내용',
      date: '2024-10-01',
      views: 120,
      thumbnail: null,
    },
    {
      title: '두 번째 포스트',
      content: '두 번째 포스트 내용',
      date: '2024-10-10',
      views: 90,
      thumbnail: null,
    },
  ]);

  // 페이지 이동 시 새로운 포스트가 있으면 상태 업데이트
  useEffect(() => {
    const savedPost = localStorage.getItem('newPost');
    if (savedPost) {
      setRecentPosts([JSON.parse(savedPost), ...recentPosts]);
      localStorage.removeItem('newPost'); // 로컬 스토리지 초기화
    }
  }, []);

  return (
      <div className="content-wrapper">
        <div className="content">
          {recentPosts.length > 0 && (
              <>
                <h2>{recentPosts[0].title}</h2>
                <p>{recentPosts[0].content}</p>
                {recentPosts[0].thumbnail && (
                    <img
                        src={recentPosts[0].thumbnail}
                        alt="썸네일"
                        style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                    />
                )}
              </>
          )}
          <CommentSection />
        </div>
        <div className="recent-posts">
          <h3>최근 포스트</h3>
          {recentPosts.map((post, index) => (
              <div key={index} className="recent-post-item">
                <h4>{post.title}</h4>
                <p>{post.content}</p>
                <p>작성일: {post.date}</p>
                <p>조회수: {post.views}</p>
                {post.thumbnail && (
                    <img
                        src={post.thumbnail}
                        alt="썸네일"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                )}
              </div>
          ))}
          <div className="pagination">
            <button>1</button>
            <button>2</button>
          </div>
        </div>
      </div>
  );
};

export default Content;

