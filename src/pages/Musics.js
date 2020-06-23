import React, { useState, useEffect } from "react";
import SubCategories from "../components/SubCategories";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

import postService from "../services/postService";

const Musics = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getMusics().then((newPosts) => setPosts(newPosts));
  }, []);

  return (
    <div className="musics">
      <div className="general-body">
        <SubCategories />
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Musics;
