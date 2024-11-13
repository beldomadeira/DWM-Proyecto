import React from "react";
import "./LeftSide.css";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LeftSide = ({ userProfilePic }) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/feed");
  };

  const handleProfileClick = () => {
    axios
      .get(`http://localhost:3001/api/user/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("Perfil del usuario", response.data);
        navigate(`/user/${response.data.user._id}`, {
          state: { userData: response.data },
        });
      })
      .catch((error) => {
        console.error("Error al obtener el perfil del usuario", error);
      });
  };

  return (
    <div className="LeftSidePart">
      <div className="logoPart">
        <h1 className="logoText" onClick={handleHomeClick}>
          UCUGRAM
        </h1>
      </div>
      <div className="navLinkPart">
        <div className="navLink">
          <HomeIcon className="icon" />
          <div className="navName" onClick={handleHomeClick}>
            Home
          </div>
        </div>
        <div className="navLink">
          <NotificationsIcon className="icon" />
          <div className="navName">Notifications</div>
        </div>
        <div className="navLink">
          <AddIcon className="icon" />
          <div className="navName">Create</div>
        </div>
        <div className="navLink" onClick={handleProfileClick}>
          <img src={userProfilePic} alt="User Profile" className="profileImg" />
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
