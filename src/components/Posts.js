import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Textarea from "./textarea/Textarea";
import LikeComment from "./LikeComment";

const Posts = ({ posts }) => {
  const [commentClicked, setCommentClick] = useState(false);
  const [expandedText, setExpandedText] = useState(false);
  const cardText = (post) => {
    if (posts !== null || posts !== undefined) {
      return expandedText
        ? post.content
        : post.content.split(" ").slice(0, 60).join(" ");
    }
  };
  return (
    <div className="posts">
      {posts.map((post, i) => (
        <Card style={{ width: "40rem" }} key={i} className="single-post">
          <Card.Img variant="top" src="https://picsum.photos/400/400" />
          <Card.Body>
            <Card.Title>{post.heading}</Card.Title>
            <Card.Text>{cardText(post)}</Card.Text>
            <button onClick={() => setExpandedText(!expandedText)}>
              Read more
            </button>
            <div className="like-section">
              <LikeComment
                commentClicked={commentClicked}
                setCommentClick={setCommentClick}
                likes={post.likes}
              />
            </div>
            <div>{commentClicked ? <Textarea /> : null}</div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
