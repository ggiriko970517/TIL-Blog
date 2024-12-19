import React, { useState } from 'react';
import '../../styles/Home/CardLayout.scss';

const CardLayout = () => {

  const [filter, setFilter] = useState('all');

    const cards = [
        { title: 'Card 1', text: 'This is card 1', image: 'https://via.placeholder.com/150', date: '1일 전', profileImage: 'https://via.placeholder.com/15', nickname: 'User1', likes: 10, comments: 5 }, 
        { title: 'Card 2', text: 'This is card 2', image: 'https://via.placeholder.com/150', date: '2일 전', profileImage: 'https://via.placeholder.com/15', nickname: 'User2', likes: 20, comments: 10 }, 
        { title: 'Card 3', text: 'This is card 3', image: 'https://via.placeholder.com/150', date: '3일 전', profileImage: 'https://via.placeholder.com/15', nickname: 'User3', likes: 30, comments: 15 }, 
        { title: 'Card 4', text: 'This is card 4', image: 'https://via.placeholder.com/150', date: '1주일 전', profileImage: 'https://via.placeholder.com/15', nickname: 'User4', likes: 40, comments: 20 }, 
        { title: 'Card 5', text: 'This is card 5', image: 'https://via.placeholder.com/150', date: '1달 전', profileImage: 'https://via.placeholder.com/15', nickname: 'User5', likes: 50, comments: 25 }, 
        { title: 'Card 6', text: 'This is card 6', image: 'https://via.placeholder.com/150', date: '1일 전', profileImage: 'https://via.placeholder.com/15', nickname: 'User6', likes: 60, comments: 30 }, 
        { title: 'Card 7', text: 'This is card 7', image: 'https://via.placeholder.com/150', date: '2일 전', profileImage: 'https://via.placeholder.com/15', nickname: 'User7', likes: 70, comments: 35 }, 
        { title: 'Card 8', text: 'This is card 8', image: 'https://via.placeholder.com/150', date: '3일 전', profileImage: 'https://via.placeholder.com/15', nickname: 'User8', likes: 80, comments: 40 }, 
    ];
     
    const filteredCards = cards.filter(card => { if (filter === 'all') return true; return card.date === filter; });



  return (
    <>
     {/* 필터 드롭다운 */} 
     <div className="filter-dropdown"> 
       <select onChange={(e) => setFilter(e.target.value)}>   <option value="all">All</option> 
            <option value="1일 전">오늘</option> 
            <option value="2일 전">이번 주</option> 
            <option value="3일 전">이번 달</option> 
            <option value="1주일 전">올해</option> 
        </select> 
      </div>



    {/* 카드 레이아웃 */}
    <div className="card-layout">
    {cards.map((card, index) => (
      <div key={index} className="card">

       <a href="#" className="user-card-input"> <img src={card.image} alt={`Thumbnail for ${card.title}`} className="user-card-image"/></a> 
        <h6>{card.title}</h6>
        <p>{card.text}</p>
    
    {/* 유저 프로필 이미지 / 좋아요 / 댓글  */}
        <div className="user-info">
            <a className="profile-Image-input" href="http://www.naver.com"><img src={card.profileImage} alt={`User-profile-Image ${card.title}`} className="profile-Image"/>
            <span className="nickname">{card.nickname}</span></a>

            <span className="likes">❤️ {card.likes}</span> 
            <span className="comments">💬 {card.comments}</span>
        </div>

        <p className="date">{card.date}</p>
      </div>
    ))}
  </div>
  {/* 카드 레이아웃 끝 */}
  </>
);
};

export default CardLayout