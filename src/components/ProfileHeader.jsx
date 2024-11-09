import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = ({ username, name, description, profilePicture }) => {
  return (
    <div className="profile-header">
      <div className="profile-avatar">
        <img src={profilePicture }  />
      </div>
      
      <div className="profile-info">
        <div className="profile-username-container">
          <h1 className="profile-username">{username}</h1>
          <button className="edit-profile-btn">Editar perfil</button>
          <button className="settings-btn">⚙️</button>
        </div>
        
        <div className="profile-details">
          <p className="profile-bio">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;