import React, { useState } from "react";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

import './PostCard.css';

const PostCard = ({ username, userProfilePic, postImage, caption, likes, comments, timeAgo }) => {
    // Estado para manejar si el corazón está "liked" o no
    const [liked, setLiked] = useState(false);

    // Función para cambiar el estado del "like"
    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="post">

            <div className="postHeader">
                <div className="userInfo">
                    <img src={userProfilePic} alt="User" className="profilePic" />
                    <span className="username">{username}</span>
                </div>
                <MoreHorizIcon className="moreIcon" />
            </div>

            <img src={postImage} alt="Post" className="postImage" />

            <div className="postContent">
                <div className="likes">{likes} likes</div>
                <div className="caption">
                    <span className="username-post">{username}</span> {caption}
                </div>
                <div className="timeAgo">{timeAgo}</div>
            </div>

            <div className="postActions">
                {/* Cambiar el ícono de corazón según el estado */}
                {liked ? (
                    <FavoriteIcon 
                        className="actionIcon favoriteIcon liked" 
                        onClick={handleLike} 
                    />
                ) : (
                    <FavoriteBorderOutlinedIcon 
                        className="actionIcon favoriteIcon" 
                        onClick={handleLike} 
                    />
                )}
                <ModeCommentOutlinedIcon className="actionIcon commentIcon" />
            </div>

            <div className="addComment">
                <input type="text" placeholder="Add a comment..." />
            </div>
        </div>
    );
}

export default PostCard;
