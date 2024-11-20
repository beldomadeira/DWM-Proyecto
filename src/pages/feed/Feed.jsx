import React from 'react';
import axios from 'axios';
import SideBar from '../../components/sideBar/SideBar';
import UsersPanel from '../../components/usersPanel/UsersPanel';
import PostsPanel from '../../components/postsPanel/PostsPanel';
import './Feed.css';

function Feed() {
    const userId = localStorage.getItem("userId");
    
    const profilePicture = axios.get(`http://localhost:3001/api/user/profile/${userId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then((response) => {
            return response.data.user.profilePicture;
        })
        .catch((error) => {
            console.error("Error al obtener el perfil del usuario", error);
        });

    return (
        <div className="App">
            <div className='sideBar-container'>
                <SideBar /> 
            </div>
            <div className='postsPanel-container'>
                <PostsPanel />
            </div>
            <div className='usersPanel-container'>
                <UsersPanel />
            </div>
        </div>
    );
}

export default Feed;