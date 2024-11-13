import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LeftSide from '../components/LeftSide';
import ProfileHeader from '../components/ProfileHeader';
import ProfileStats from '../components/ProfileStats';
import ProfileGrid from '../components/ProfileGrid';
import './Layout.css';
import './User.css';
import axios from 'axios';

const User = () => {
  const { id } = useParams();

  const [userData, setUserData] = useState({
    username: "",
    name: "",
    bio: "",
    avatar: null,
    stats: {
      posts: 0,
      followers: 0,
      following: 0
    },
    posts: []
  });
  const [isOwnProfile, setIsOwnProfile] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUserId = localStorage.getItem('id');
    setError(null);
    setIsLoading(true);
    
    if (id === storedUserId) {
      console.log("hola");
      setIsOwnProfile(true);
    } else {
      setIsOwnProfile(false);
    }

    axios.get(`http://localhost:3001/api/user/profile/${id}`)
      .then(response => {
        const { user, posts } = response.data;
        console.log("User data:", user);
        setUserData({
          username: user.username,
          name: user.username,
          bio: user.description || "",
          avatar: user.profilePicture || null,
          email: user.email,
          createdAt: user.createdAt,
          stats: {
            posts: posts.length,
            followers: user.friends.length,
            following: 0
          },
          posts: posts
        });
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
        setError("Usuario no encontrado o error de conexión");
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="App">
        <div className="leftSide">
          <LeftSide />
        </div>
        <div className="middleSide">
          <div className="loading-container">
            <div className="loading-spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <div className="leftSide">
          <LeftSide />
        </div>
        <div className="middleSide">
          <div className="error-container">
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="leftSide">
        <LeftSide userProfilePic={userData.avatar} />
      </div>
      
      <div className="middleSide">
        <div className="user-profile">
          <ProfileHeader 
            username={userData.username}
            name={userData.name}
            bio={userData.bio}
            avatar={userData.avatar}
            email={userData.email}
            createdAt={userData.createdAt}
            isOwnProfile={isOwnProfile}
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