import React from "react";
import { Card } from "react-bootstrap";

const posts = [
  {
    title: "Diseases",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    likes: 5,
  },
  {
    title: "Footballers in the making",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    likes: 8,
  },
];

const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post, i) => (
        <Card style={{ width: "45vw" }} key={i} className="single-post">
          <Card.Img variant="top" src="https://picsum.photos/400/400" />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.content}</Card.Text>
            <button className="px-3">Read more</button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
