import React, { useState, useEffect } from "react";
import SubCategories from "../components/SubCategories";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

import postService from "../services/postService";

const Sports = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getSports().then((newPosts) => setPosts(newPosts));
  }, []);

  return (
    <div className="sports">
      <div className="general-body">
        <SubCategories />
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Sports;
