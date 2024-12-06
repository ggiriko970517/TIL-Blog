
import React from 'react';
import '../styles/ProfileCard.scss';

function ProfileCard() {
  return (
    <div className="profile-card">
      <img src="../profile.png" alt="Profile" className="profile-image" />
      <div className="profile-info">
        <h1>Username</h1>
        <p>Post count: 0 | Visitor count: 0</p>
      </div>
    </div>
  );
}

export default ProfileCard;
