import React, { useState, useEffect } from "react";
import SubCategories from "../components/SubCategories";
import Slider from "../components/Carousel";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import postService from "../services/postService";

const General = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getGeneral().then((newPosts) => setPosts(newPosts));
  }, []);

  return (
    <div className="general">
      <Slider />
      <div className="general-body">
        <SubCategories />
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
};

export default General;
