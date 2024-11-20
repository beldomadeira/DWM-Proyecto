
import React from 'react';
import './ProfileStats.css';

const ProfileStats = ({ posts, followers, following }) => {
  return (
    <div className="profile-stats">
      <div className="stat-item">
        <span className="stat-number">{posts}</span>
        <span className="stat-label">publicaciones</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{followers}</span>
        <span className="stat-label">seguidores</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{following}</span>
        <span className="stat-label">seguidos</span>
      </div>
    </div>
  );
};

export default ProfileStats;