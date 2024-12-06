import React, { useState } from 'react';
import './Alarm.scss';
import AlramIcon from '../components/common/alram_icon.png';


const Alarm = () => {
  const [activeTab, setActiveTab] = useState('all'); // 현재 선택된 탭
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      profileImage: 'https://via.placeholder.com/50',
      sender: 'User1',
      content: '안녕하세요! 새로운 알림입니다.',
      isRead: false,
    },
    {
      id: 2,
      profileImage: 'https://via.placeholder.com/50',
      sender: 'User2',
      content: '프로젝트 일정이 변경되었습니다.',
      isRead: true,
    },
    {
      id: 3,
      profileImage: 'https://via.placeholder.com/50',
      sender: 'User3',
      content: '회의가 취소되었습니다.',
      isRead: false,
    },
  ]);

  // 메시지 삭제 함수
  const handleDelete = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  // 읽음 표시 함수
  const markAsRead = (id) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, isRead: true } : msg))
    );
  };

  // 현재 탭에 따라 필터링된 메시지
  const filteredMessages =
    activeTab === 'all'
      ? messages
      : messages.filter((msg) => !msg.isRead);

  return (
    <div className="alarm-container">
      {/* 알람 헤더 */}
      <div className="alarm">
        <div className="alarm-header">
          <a id="alarm-icon" href="#">
            <img src={AlramIcon} alt="알람 아이콘" />
          </a>
          <span class="left">Alarm</span>
        </div>

        {/* 버튼 */}
        <div className="buttons">
          <button
            onClick={() => setActiveTab('all')}
            className={activeTab === 'all' ? 'active' : ''}
          >
            전체 메시지
          </button>
          <button
            onClick={() => setActiveTab('unread')}
            className={activeTab === 'unread' ? 'active' : ''}
          >
            읽지 않음
          </button>
        </div>
      </div>

      {/* 메시지 리스트 */}
      <div className="message-list">
        {filteredMessages.map((message) => (
          <div className="message" key={message.id}>
            <img
              src={message.profileImage}
              alt="프로필 이미지"
              className="profile"
            />
            <div className="content">
              <h4>{message.sender}</h4>
              <p>{message.content}</p>
            </div>
            <div className="actions">
              {!message.isRead && (
                <button onClick={() => markAsRead(message.id)}>읽음</button>
              )}
              <button onClick={() => handleDelete(message.id)}>삭제</button>
            </div>
          </div>
        ))}
        {filteredMessages.length === 0 && (
          <p className="empty-message">표시할 메시지가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Alarm;
