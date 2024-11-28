import React, { useState } from 'react';
import './App.css';

const posts = [
  { id: 1, title: "[용산구 용참숲] 이른 하게 구워진 소고기 한판 완벽한 사이드 예...", views: 145, date: "2024.10.9" },
  { id: 2, title: "[용산구] 숙대입구 유명 맛집 고양이 현신 진한 돈코츠 라면", views: 151, date: "2024.10.2" },
  { id: 3, title: "[마포구] 훌륭한 반찬, 가성비 확실 소머리 국밥", views: 115, date: "2024.9.28" },
  { id: 4, title: "[상수역] 서울에서 1박 2일 노래방/보드게임/영화 보기 좋은 파티룸", views: 53, date: "2024.9.15" },
  { id: 5, title: "[상수역] 서울에서 1박 2일 친구들과 편하게 놀기 좋은 파티룸", views: 143, date: "2024.9.14" },
  { id: 6, title: "[마포구] 가성비 좋은 순댓국", views: 98, date: "2024.9.13" },
  { id: 7, title: "[용산구] 이색 카페 탐방", views: 120, date: "2024.9.10" },
  // 더 많은 데이터 추가 가능
];

function App() {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [isListVisible, setIsListVisible] = useState(true);

  const totalPages = Math.ceil(posts.length / itemsPerPage);

  // 현재 페이지에 표시할 게시물
  const paginatedPosts = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // 첫 페이지로 이동
  };

  const handleToggleList = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div className="container">
      {/* Header 영역 */}
      <div className="header">
        <h2>전체보기</h2>
        <span className="close-text" onClick={handleToggleList}>
          목록닫기
        </span>
      </div>
      <p>{posts.length}개의 글</p>
      
      {/* 게시물 리스트 및 페이지네이션 */}
      {isListVisible && (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>글 제목</th>
                <th>조회수</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPosts.map(post => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.views}</td>
                  <td>{post.date}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 페이지네이션 버튼 */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={currentPage === index + 1 ? 'active' : ''}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}

      {/* 글 관리 열기 및 줄 수 선택 */}
      <div className="button-container">
        <button className="more-button">글 관리 열기</button>
        <select
          className="view-count-dropdown"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value="5">5줄 보기</option>
          <option value="10">10줄 보기</option>
          <option value="15">15줄 보기</option>
        </select>
      </div>
    </div>
  );
}

export default App;