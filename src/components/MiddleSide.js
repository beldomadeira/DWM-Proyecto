import React from "react";
import './MiddleSide.css';
import Post from './Post';
import { use } from "framer-motion/client";

const MiddleSide = () => {
    const posts = [
        {
            username: "user1",
            userProfilePic: "https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg",
            postImage: "https://24ai.tech/es/wp-content/uploads/sites/5/2023/10/01_product_1_sdelat-izobrazhenie-1-1-2.jpg",
            caption: "Loving the view!",
            likes: 120,
        },
        {
            username: "user2",
            userProfilePic: "https://img.freepik.com/psd-premium/ilustracion-3d-avatar-o-perfil-humano_23-2150671167.jpg",
            postImage: "https://24ai.tech/es/wp-content/uploads/sites/5/2023/10/01_product_1_sdelat-izobrazhenie-1-1-4.jpg",
            caption: "Feeling happy!",
            likes: 100,
        },
        {
            username: "user3",
            userProfilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWXaypfL5fRZ0s-SJWUep4OcHJqoGKLteqdg&s",
            postImage: "https://www.shutterstock.com/image-photo/curious-scottish-fold-cat-grey-600nw-1925211236.jpg",
            caption: "So tired!",
            likes: 80,
        }
    ];
    return (
        <div className="MiddleSidePart">
            {posts.map((post, index) => (
                <Post 
                    key={index}
                    username={post.username}
                    userProfilePic={post.userProfilePic}
                    postImage={post.postImage}
                    caption={post.caption}
                    likes={post.likes}
                />
            ))}
        </div>
    );
}

export default MiddleSide;
