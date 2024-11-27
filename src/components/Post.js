import React, { useState } from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import SendIcon from "@mui/icons-material/Send";

const Post = ({
  postId,
  username,
  userProfilePic,
  postImage,
  caption,
  likes,
  comments,
  timeAgo,
  onLike,
  onComment,
  onDeleteComment,
  currentUserId,
  isLiked
}) => {
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    onComment(postId, newComment);
    setNewComment('');
  };

  return (
    <div className="post">
      <div className="postHeader">
        <div className="userInfo">
          <img src={userProfilePic} alt="User" className="profilePic" />
          <span className="username-post">{username}</span>
        </div>
        <MoreHorizIcon className="moreIcon" />
      </div>

      <img src={postImage} alt="Post" className="postImage" />

      <div className="postActions">
        <FavoriteIcon 
          className={`actionIcon ${isLiked ? 'liked' : ''}`}
          onClick={() => onLike(postId)}
        />
        <ModeCommentIcon 
          className="actionIcon"
          onClick={() => setShowComments(!showComments)}
        />
        <SendIcon className="actionIcon" />
      </div>

      <div className="postContent">
        <div className="interaction-counts">
          <span className="likes-count">{likes.length} likes</span>
          <span className="comments-count">{comments.length} comments</span>
        </div>
        <div className="caption">
          <span className="username">{username}</span> {caption}
        </div>
        
        {showComments && (
          <div className="comments-section">
            {comments.map((comment) => (
              <div key={comment._id} className="comment">
                <span className="comment-username">{comment.user?.username}</span>
                <span className="comment-content">{comment.content}</span>
                {comment.user?._id === currentUserId && (
                  <button 
                    className="delete-comment"
                    onClick={() => onDeleteComment(postId, comment._id)}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
        
        <div className="timeAgo">{timeAgo}</div>
      </div>

      <form className="addComment" onSubmit={handleSubmitComment}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button 
          type="submit"
          disabled={!newComment.trim()}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
