import React, { useState } from "react";

const LikeComment = ({ commentClicked, setCommentClick, likes }) => {
  const [likeClicked, setLikeClicked] = useState(true);

  return (
    <div className="like-unlike">
      <button onClick={() => setLikeClicked(!likeClicked)}>
        <i
          className={likeClicked ? "fa fa-thumbs-o-up" : "fa fa-thumbs-o-down"}
          aria-hidden="true"
        >
          {likeClicked ? "Like" : "Unlike"}
        </i>
      </button>
      {/* <span>{likes} likes</span> */}
      <button
        onClick={() => {
          setCommentClick(!commentClicked);
        }}
      >
        Comment
      </button>
    </div>
  );
};

export default LikeComment;
