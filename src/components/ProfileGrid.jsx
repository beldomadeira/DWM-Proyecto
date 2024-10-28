import React from 'react';
import './ProfileGrid.css';

const ProfileGrid = ({ posts }) => {
  return (
    <div className="profile-grid">
      <div className="grid-header">
        <button className="grid-tab active">
          <span className="grid-icon">□</span>
          Publicaciones
        </button>
        <button className="grid-tab">
          <span className="grid-icon">⊠</span>
          Guardado
        </button>
      </div>
      
      <div className="grid-content">
        {posts.map((post, index) => (
          <div key={index} className="grid-item">
            <img src={post.image || `/api/placeholder/300/300`} alt={`Post ${index + 1}`} />
            <div className="grid-item-overlay">
              <div className="overlay-stats">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileGrid;