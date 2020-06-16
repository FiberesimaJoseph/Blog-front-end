import React from "react";
import Footer from "./Footer";
import { Nav } from "react-bootstrap";

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
    <div className="sub-categories" style={{ width: "20vw" }}>
      <h4>SUB CATEGORIES</h4>
      <hr />

      <Nav defaultActiveKey="/home" className="flex-column sub-categories">
        {subCategories.map((item, i) => (
          <Nav.Link key={i}>
            <input type="radio" className="mr-1" />
            {item.category} ({item.posts})
          </Nav.Link>
        ))}
      </Nav>
      <hr />
      <Footer />
    </div>
  );
};

export default SubCategories;
