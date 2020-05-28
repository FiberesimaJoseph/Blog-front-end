import React from "react";
import SubCategories from "../components/SubCategories";
import Slider from "../components/Carousel";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

const General = () => {
  return (
    <div className="general">
      <Slider />
      <div className="general-body">
        <SubCategories />
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
};

export default General;
