import React from "react";
import './LeftSide.css';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';

const LeftSide = ({ userProfilePic }) => {
    return (
        <div className="LeftSidePart">
            <div className="logoPart">
                <h1 className="logoText">UCUGRAM</h1>
            </div>
            <div className="navLinkPart">
                <div className="navLink">
                    <HomeIcon className="icon" />
                    <div className="navName">Home</div>
                </div>
                <div className="navLink">
                    <NotificationsIcon className="icon" />
                    <div className="navName">Notifications</div>
                </div>
                <div className="navLink">
                    <AddIcon className="icon" />
                    <div className="navName">Create</div>
                </div>
                <div className="navLink">
                    <img 
                        src={userProfilePic} 
                        alt="User Profile" 
                        className="profileImg" 
                    />
                    <div className="navName">Profile</div>
                </div>
            </div>
        </div>
    );
}

export default LeftSide;
