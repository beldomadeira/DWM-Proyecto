import React from 'react';
import './ProfileStats.css';

const ProfileStats = ({ posts, followers, following }) => {
  
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  return (
    <div className="profile-stats">
      <div className="stat-item" role="button" tabIndex="0">
        <span className="stat-number">{formatNumber(posts)}</span>
        <span className="stat-label">publicaciones</span>
      </div>
      <div className="stat-item" role="button" tabIndex="0">
        <span className="stat-number">{formatNumber(followers)}</span>
        <span className="stat-label">seguidores</span>
      </div>
      <div className="stat-item" role="button" tabIndex="0">
        <span className="stat-number">{formatNumber(following)}</span>
        <span className="stat-label">seguidos</span>
      </div>
    </div>
  );
};

export default ProfileStats;