import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import LeftSide from '../components/LeftSide';
import ProfileHeader from '../components/ProfileHeader';
import ProfileStats from '../components/ProfileStats';
import ProfileGrid from '../components/ProfileGrid';
import './Layout.css';
import './User.css';

const User = () => {
  const { username } = useParams();
  const location = useLocation();
  
  const userProfilePicTest = 'https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg';
  
  // Obtenemos los datos del usuario del state o usamos datos por defecto
  const userData = location.state?.userData || {
    name: "Usuario no encontrado",
    bio: "No hay información disponible",
    avatar: null,
    stats: {
      posts: 0,
      followers: 0,
      following: 0
    },
    posts: []
  };

  return (
    <div className="App">
      <div className="leftSide">
        <LeftSide userProfilePic={userProfilePicTest} />
      </div>
      
      <div className="middleSide">
        <div className="user-profile">
          <ProfileHeader 
            username={username}
            name={userData.name}
            bio={userData.bio}
            avatar={userData.avatar}
          />
          
          <ProfileStats 
            posts={userData.stats.posts}
            followers={userData.stats.followers}
            following={userData.stats.following}
          />
          
          <ProfileGrid posts={userData.posts} />
        </div>
      </div>
      
    </div>
  );
};

export default User;