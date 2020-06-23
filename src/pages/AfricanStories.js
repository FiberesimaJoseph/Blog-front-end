import React, { useState, useEffect } from "react";
import SubCategories from "../components/SubCategories";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

import postService from "../services/postService";

const Africanstories = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAfricanStories().then((newPosts) => setPosts(newPosts));
  }, []);

  return (
    <div className="african-stories">
      <div className="general-body">
        <SubCategories />
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Africanstories;
