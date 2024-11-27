import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';

import './SideBar.css';

const SideBar = () => {
    const navigate = useNavigate();

    const handleHomeClick = (e) => {
        e.preventDefault();
        navigate("/feed");
    };

    const handleProfileClick = () => {
        axios.get(`http://localhost:3001/api/user/profile/6728eaaa9aadd247da5f2a9a`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }
        ).then((response) => {
            console.log("Perfil del usuario", response.data);
            console.log("Perfil del usuario 2", response.data.username);    
            navigate(`/user/${response.data}`, { state: { userData: response.data } });
        }).catch((error) => {
            console.error("Error al obtener el perfil del usuario", error);
    });
    }

    const handleLogoutClick = () => {
        localStorage.removeItem("token"); 
        navigate("/login");
    };

    return (
        <div className="sideBar-container">
            <div className="sideBar">
                <ul>
                    <li className="logo" onClick={handleHomeClick}>
                        <span>UCU</span>
                        <span>GRAM</span>
                    </li>
                    <li onClick={handleHomeClick}><HomeIcon className="icon" />Home</li>
                    <li ><NotificationsIcon className="icon" />Notifications</li>
                    <li onClick={handleProfileClick}><AccountCircleIcon className="icon"/>Profile</li>
                    <li onClick={handleLogoutClick}><CloseIcon className="icon"/>Logout</li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
