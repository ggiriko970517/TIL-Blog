import React, { useState } from 'react';
import '../style/page/BookMark.scss';
import BookMark_icon from '../components/common/bookmark_icon.png';

const BookMark = () => {
  const [activeTab, setActiveTab] = useState(''); // 활성화된 탭
  const [recentPosts, setRecentPosts] = useState([
    {
      id: 1,
      title: 'React 기초 가이드',
      summary: 'React에 대해 알아봅니다.',
      userImage: 'https://via.placeholder.com/50', // 유저 이미지 (더미)
      isRead: false,
    },
    {
      id: 2,
      title: 'JavaScript 팁 10가지',
      summary: '효율적인 JS 코딩 팁!',
      userImage: 'https://via.placeholder.com/50',
      isRead: true,
    },
  ]);

  const [likedPosts, setLikedPosts] = useState([
    {
      id: 1,
      title: 'CSS Flexbox 완벽 가이드',
      summary: 'CSS 레이아웃 잡는 법.',
      userImage: 'https://via.placeholder.com/50',
      isRead: false,
    },
    {
      id: 2,
      title: 'HTML 태그 총정리',
      summary: 'HTML의 모든 것.',
      userImage: 'https://via.placeholder.com/50',
      isRead: true,
    },
  ]);


  // 읽음 상태 변경 함수
  const toggleReadStatus = (id, type) => {
    const updatePosts = (posts) =>
      posts.map((post) =>
        post.id === id ? { ...post, isRead: !post.isRead } : post
      );

    if (type === 'recent') {
      setRecentPosts(updatePosts(recentPosts));
    } else if (type === 'liked') {
      setLikedPosts(updatePosts(likedPosts));
    }
  };

  // 삭제 함수
  const deletePost = (id, type) => {
    const updatePosts = (posts) => posts.filter((post) => post.id !== id);

    if (type === 'recent') {
      setRecentPosts(updatePosts(recentPosts));
    } else if (type === 'liked') {
      setLikedPosts(updatePosts(likedPosts));
    }
  };

  return (
    <div className="bookmark-container">

      <div className="bookMark">
        {/* 북마크 로고 */}
        <div className="bookmarkHeader">
          <a id="bookmark-icon" href="#">
            <img src={BookMark_icon} alt="북마크 아이콘" />
          </a>
          <span class="right">Bookmark</span>
        </div>

        {/* 버튼들 */}
        <div className="buttons">
          <button
            onClick={() => setActiveTab('recent')}
            className={activeTab === 'recent' ? 'active' : ''}>
            최근 읽은 포스트
          </button>

          <button
            onClick={() => setActiveTab('liked')}
            className={activeTab === 'liked' ? 'active' : ''}
          >
            내가 찜한 포스트
          </button>
        </div>

      </div>

      {/* 포스트 목록 */}
      <div className="postList">
        {(activeTab === 'recent' ? recentPosts : likedPosts).map((post) => (

          <div key={post.id} className="post">
            <img src={post.userImage} alt="user" className="userImage" />

            <div className="postContent">
              <h3>{post.title}</h3>
              <p>{post.summary}</p>

              <div className="postActions">
                <button
                  onClick={() =>
                    toggleReadStatus(post.id, activeTab === 'recent' ? 'recent' : 'liked')
                  }
                >
                  {post.isRead ? '읽음' : '읽지 않음'}
                </button>
                <button
                  onClick={() =>
                    deletePost(post.id, activeTab === 'recent' ? 'recent' : 'liked')
                  }
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookMark;
