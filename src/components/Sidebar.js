import React from "react";
import { Card } from "react-bootstrap";

const img = "https://picsum.photos/50/50";
const recentPosts = [
  {
    title: "Certainty listening no behavior existence assurance situation",
    image: img,
  },
  {
    title: "Certainty listening no behavior existence assurance situation",
    image: img,
  },
  {
    title: "Certainty listening no behavior existence assurance situation",
    image: img,
  },
];

const popularPost = [
  {
    title: "Wahala dey",
    content: "Certainty listening no behavior existence assurance situation",
  },
];

const PopularPost = () => {
  return (
    <Card style={{ width: "25vw" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{popularPost.title}</Card.Title>
        <Card.Text>{popularPost.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};
const RecentPosts = () => {
  return (
    <div className="recent-posts">
      <h4>RECENT POSTS</h4>
      <hr />
      {recentPosts.map((post, i) => (
        <div key={i} className="recent-post-card">
          <img src={post.image} alt="#"></img>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <RecentPosts />
      <PopularPost />
    </div>
  );
};

export default Sidebar;
