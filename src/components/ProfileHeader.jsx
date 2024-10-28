import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = ({ username, name, bio, avatar }) => {
  return (
    <div className="profile-header">
      <div className="profile-avatar">
        <img src={avatar || "/api/placeholder/150/150"} alt={username} />
      </div>
      
      <div className="profile-info">
        <div className="profile-username-container">
          <h1 className="profile-username">{username}</h1>
          <button className="edit-profile-btn">Editar perfil</button>
          <button className="settings-btn">⚙️</button>
        </div>
        
        <div className="profile-details">
          <h2 className="profile-name">{name}</h2>
          <p className="profile-bio">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;