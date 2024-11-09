import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import LeftSide from '../components/LeftSide';
import ProfileHeader from '../components/ProfileHeader';
import ProfileStats from '../components/ProfileStats';
import ProfileGrid from '../components/ProfileGrid';
import './Layout.css';
import './User.css';

const defaultProfilePicture = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

const User = () => {
  const { id } = useParams();
  const location = useLocation();

  // Datos predeterminados si no se pasa `userData` desde `location.state`
  const userData = location.state?.userData || {
    user: {
      username: "Usuario no encontrado",
      description: "No hay información disponible",
      profilePicture: defaultProfilePicture,
    },
    stats: {
      posts: 0,
      followers: 0,
      following: 0,
    },
    posts: [],
  };

  console.log("user.jsx:", userData);

  return (
    <div className="App">
      <div className="leftSide">
        <LeftSide userProfilePic={userData.user.profilePicture} />
      </div>

      <div className="middleSide">
        <div className="user-profile">
          <ProfileHeader
            id={id}
            username={userData.user.username}
            description={userData.user.description}
            profilePicture={userData.user.profilePicture}
          />

          <ProfileStats
            posts={userData.posts}
            followers={userData.user.friends}
            // following={userData.stats.following}
          />

          <ProfileGrid posts={userData.posts} />
        </div>
      </div>
    </div>
  );
};

export default User;
