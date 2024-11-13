import React, { useEffect, useState } from "react";
import "./MiddleSide.css";
import Post from "./Post";
import axios from "axios";

const MiddleSide = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("token", localStorage.getItem("token"));
    axios
      .get(`http://localhost:3001/api/posts/feed`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  return (
    <div className="MiddleSidePart">
      {posts.map((post, index) => (
        <Post
          key={index}
          username={post.user.username}
          userProfilePic={post.user.profilePicture}
          postImage={`http://localhost:3001/${post.imageUrl}`}
          caption={post.caption}
          likes={post.likes}
          comments={post.comments}
          timeAgo={post.createdAt}
        />
      ))}
    </div>
  );
};

export default MiddleSide;
