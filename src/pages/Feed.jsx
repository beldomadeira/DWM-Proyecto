import React, { useState, useEffect } from 'react';
import LeftSide from '../components/LeftSide';
import MiddleSide from '../components/MiddleSide';
import axios from 'axios';

function Feed() {
    const [userProfilePic, setUserProfilePic] = useState(null);
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        axios.get(`http://localhost:3001/api/user/profile/${userId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((response) => {
            setUserProfilePic(response.data.user.profilePicture);
        })
        .catch((error) => {
            console.error("Error al obtener el perfil del usuario", error);
        });
    }, [userId]);

    return (
        <div className="App">
            <div className='leftSide'>
                <LeftSide userProfilePic={userProfilePic} />
            </div>
            <div className='middleSide'>
                <MiddleSide />
            </div>
            <div className='rightSide'>
            </div>
        </div>
    );
}

export default Feed;