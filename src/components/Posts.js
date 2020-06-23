import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Textarea from "./textarea/Textarea";
import LikeComment from "./LikeComment";

const Posts = ({ posts }) => {
  const [commentClicked, setCommentClick] = useState(false);

  return (
    <div className="posts">
      {posts.map((post, i) => (
        <Card style={{ width: "30rem" }} key={i} className="single-post">
          <Card.Img variant="top" src="https://picsum.photos/400/400" />
          <Card.Body>
            <Card.Title>{post.heading}</Card.Title>
            <Card.Text>{post.content}</Card.Text>

            <div className="like-section">
              <LikeComment
                commentClicked={commentClicked}
                setCommentClick={setCommentClick}
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
