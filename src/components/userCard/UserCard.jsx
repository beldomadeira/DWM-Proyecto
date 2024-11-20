import { useNavigate } from 'react-router-dom';

import './UserCard.css';

const UserCard = ({ username, profilePicture, userId }) => {

    const profileImage = profilePicture || 'https://via.placeholder.com/150';

        const navigate = useNavigate();

        // Función que maneja el clic en "Ver perfil"
        const handleViewProfile = () => {
            navigate(`/user/${userId}`); // Redirige a la ruta con el id del usuario
        };

    return (
        <div className='userCard-container'>
            <div className='userCard'>
                <header>
                    <img src={profileImage} alt={username} />
                    <div className='usersCard-info'>
                        <strong>{username}</strong>
                        <span>@{username}</span>
                    </div>
                </header>
                <aside>
                    <button onClick={handleViewProfile}>Ver perfil</button>
                </aside>
            </div>
        </div>
    );
};

export default UserCard;
