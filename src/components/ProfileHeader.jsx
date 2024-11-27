import React from 'react';
import './ProfileHeader.css';
import { useNavigate } from 'react-router-dom';

const ProfileHeader = ({ 
  username, 
  name, 
  bio, 
  avatar, 
  email, 
  createdAt, 
  isOwnProfile 
}) => {
  const navigate = useNavigate();

  return (
    <div className="profile-header">
      <div className="profile-avatar">
        <img src={avatar || "/api/placeholder/150/150"} alt={username} />
      </div>
      
      <div className="profile-info">
        <div className="profile-username-container">
          <h1 className="profile-username">{username}</h1>
          {isOwnProfile && (
            <>
              <button 
                className="edit-profile-btn"
                onClick={() => navigate('/edit-profile')}
              >
                Editar perfil
              </button>
            </>
          )}
        </div>
        
        <div className="profile-details">
          <h2 className="profile-name">{name}</h2>
          <p className="profile-bio">{bio}</p>
          {isOwnProfile && (
            <>
              <p className="profile-email">{email}</p>
              <p className="profile-joined">Se unió el {new Date(createdAt).toLocaleDateString()}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;