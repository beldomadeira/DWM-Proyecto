import React from "react";
import './Post.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import { Mode } from "@mui/icons-material";

const Post = ({ username, userProfilePic, postImage, caption, likes, comments, timeAgo }) => {
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
                <div className="likes">{likes.toLocaleString()} likes</div>
                <div className="caption">
                    <span className="username">{username}</span> {caption}
                </div>
                <div className="timeAgo">{timeAgo}</div>
            </div>

            <div className="postActions">
                <FavoriteIcon className="actionIcon" />
                <ModeCommentIcon className="actionIcon" />
                <SendIcon className="actionIcon" />
            </div>


            <div className="addComment">
                <input type="text" placeholder="Add a comment..." />
            </div>
        </div>
    );
}

export default Post;
