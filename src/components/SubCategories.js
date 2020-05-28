import React from "react";
import Footer from "./Footer";

const subCategories = [
  {
    category: "Lifestyle",
    posts: 13,
  },
  {
    category: "Business",
    posts: 7,
  },
  {
    category: "Design",
    posts: 9,
  },
  {
    category: "Photography",
    posts: 19,
  },
  {
    category: "Travel",
    posts: 5,
  },
  {
    category: "Nature",
    posts: 15,
  },
];

const SubCategories = () => {
  return (
    <div className="sub-categories">
      <h4>SUB CATEGORIES</h4>
      <hr />
      <ul>
        {subCategories.map((item, i) => (
          <li key={i}>
            <input type="radio" />
            {item.category} ({item.posts})
          </li>
        ))}
      </ul>
      <hr />
      <Footer />
    </div>
  );
};

export default SubCategories;
