import React from "react";
import { Media } from "react-bootstrap";
import Textarea from "./textarea/Textarea";

const Post = ({ title, content, image, likes }) => {
  return (
    <Media className=".single-post">
      <img
        width={100}
        height={100}
        className="mr-3"
        src={image}
        alt="Generic placeholder"
      />
      <Media.Body className="card-body">
        <h5>{title}</h5>
        <p>{content}</p>
        <button className="px-3">Read more</button>
        <div className="like-comment">
          <p>
            <span>
              Like <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            </span>

            <span>
              Unlike<i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
            </span>
          </p>

          <Textarea />
        </div>
      </Media.Body>
    </Media>
  );
};

export default Post;
