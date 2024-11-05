import React from "react";
import './LeftSide.css';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

const LeftSide = ({ userProfilePic }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); // Eliminar el token de localStorage
        navigate("/login"); // Redirigir al usuario a la página de inicio de sesión
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        navigate("/feed");
    };

    return (
        <div className="LeftSidePart">
            <div className="logoPart">
                <h1 className="logoText" onClick={handleHomeClick}>UCUGRAM</h1>
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
                <div className="navLink" onClick={handleLogout}>
                    <div className="navName">Logout</div>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;
