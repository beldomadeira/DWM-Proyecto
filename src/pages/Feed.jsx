import LeftSide from '../components/LeftSide';
import MiddleSide from '../components/MiddleSide';
import axios from 'axios';

function Feed(){
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
            <div className='leftSide'>
                <LeftSide userProfilePic={profilePicture} /> 
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