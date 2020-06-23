import React from "react";
import CreatePost from "../../components/createpost/CreatePost";
import "./Posts.css";

const AdminPosts = () => {
  return (
    <div className="posts">
      <CreatePost />
    </div>
  );
};

export default AdminPosts;
