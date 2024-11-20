import { useEffect, useState } from 'react';

import axios from 'axios';

import UserCard from '../userCard/UserCard';
import './UsersPanel.css';

const UsersPanel = () => {
    const [users, setUsers] = useState([]); 
    const [searchQuery, setSearchQuery] = useState('');  

    useEffect(() => {
        axios.get("http://localhost:3001/api/user/all")
        .then((response) => {
            setUsers(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    const filteredUsers = users.filter(user => 
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='usersPanel-container'>
            <div className='usersPanel'>
                <div className='input-container'>
                    <input
                        type='text'
                        placeholder='Busca un usuario'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} 
                    />
                </div>
                <div className='usersCard-container'>
                    {filteredUsers.map(user => (
                        <UserCard 
                            key={user.username}
                            username={user.username}
                            profilePicture={user.profilePicture}
                            userId={user._id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UsersPanel;
