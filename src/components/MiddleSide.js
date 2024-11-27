import React, { useEffect, useState } from "react";
import "./MiddleSide.css";
import Post from "./Post";
import axios from "axios";

const MiddleSide = () => {
  const [posts, setPosts] = useState([]);
  const currentUserId = localStorage.getItem("userId");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
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
  };

  const handleLike = async (postId) => {
    try {
      const post = posts.find(p => p._id === postId);
      const isCurrentlyLiked = post.likes.includes(currentUserId);
      
      if (isCurrentlyLiked) {
        await axios.delete(`http://localhost:3001/api/posts/${postId}/like`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      } else {
        await axios.post(`http://localhost:3001/api/posts/${postId}/like`, {}, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      }

      // Update posts state to reflect the like change
      setPosts(posts.map(post => {
        if (post._id === postId) {
          const newLikes = isCurrentlyLiked
            ? post.likes.filter(id => id !== currentUserId)
            : [...post.likes, currentUserId];
          return { ...post, likes: newLikes };
        }
        return post;
      }));
    } catch (error) {
      console.error('Error handling like:', error);
    }
  };

  const handleComment = async (postId, comment) => {
    try {
      await axios.post(
        `http://localhost:3001/api/posts/${postId}/comments`,
        { content: comment },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      fetchPosts(); // Refresh posts to get updated comments
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const handleDeleteComment = async (postId, commentId) => {
    try {
      await axios.delete(
        `http://localhost:3001/api/posts/${postId}/comments/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      fetchPosts(); // Refresh posts to get updated comments
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div className="MiddleSidePart">
      {posts.map((post) => (
        <Post
          key={post._id}
          postId={post._id}
          username={post.user.username}
          userProfilePic={post.user.profilePicture}
          postImage={`http://localhost:3001/${post.imageUrl}`}
          caption={post.caption}
          likes={post.likes || []}
          comments={post.comments || []}
          timeAgo={new Date(post.createdAt).toLocaleDateString()}
          onLike={() => handleLike(post._id)}
          onComment={handleComment}
          onDeleteComment={handleDeleteComment}
          currentUserId={currentUserId}
          isLiked={post.likes?.includes(currentUserId)}
        />
      ))}
    </div>
  );
};

export default MiddleSide;
