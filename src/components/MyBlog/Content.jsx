import React from 'react';
import CommentSection from './CommentSection';
import '../../styles/MyBlog/Content.scss';

const Content = () => {
  const recentPosts = [
    { title: '첫 번째 포스트', date: '2024-10-01', views: 120 },
    { title: '두 번째 포스트', date: '2024-10-10', views: 90 },
    { title: '세 번째 포스트', date: '2024-10-15', views: 150 },
    { title: '네 번째 포스트', date: '2024-10-20', views: 80 },
    { title: '다섯 번째 포스트', date: '2024-10-25', views: 130 },
  ];

  return (
    <div className="content-wrapper">
      <div className="content">
        <h2>컨텐츠 제목</h2>
        <p>내용</p>
        <div>
          <span>#블로그</span>
          <span>#페이지</span>
          <span>#만들기</span>
        </div>
        <CommentSection />
      </div>
      <div className="recent-posts">
        <h3>최근 포스트</h3>
        {recentPosts.map((post, index) => (
          <div key={index} className="recent-post-item">
            <h4>{post.title}</h4>
            <p>작성일: {post.date}</p>
            <p>조회수: {post.views}</p>
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
