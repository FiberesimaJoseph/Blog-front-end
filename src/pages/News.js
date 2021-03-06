import React, { useState, useEffect } from "react";
import SubCategories from "../components/SubCategories";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

import postService from "../services/postService";

const News = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getNews().then((newPosts) => setPosts(newPosts));
  }, []);

  return (
    <div className="news">
      <div className="general-body">
        <SubCategories />
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
};

export default News;
