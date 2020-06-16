import React from "react";
import { Card } from "react-bootstrap";

const img = "https://picsum.photos/100/100";

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

const popularPost = {
  title: "Wahala dey",
  content: "Certainty listening no behavior existence assurance situation",
};

const PopularPost = () => {
  return (
    <div className="popular-post-container">
      <h3>Popular Post</h3>
      <hr />
      <Card className="popular-post">
        <Card.Img variant="top" className="img-fluid" src={img} />
        <Card.Body>
          <Card.Title>{popularPost.title}</Card.Title>
          <Card.Text>{popularPost.content}</Card.Text>
        </Card.Body>
      </Card>
    </div>
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
    <div className="sidebar" style={{ width: "25vw" }}>
      <RecentPosts />
      <PopularPost />
    </div>
  );
};

export default Sidebar;
