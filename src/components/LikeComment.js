import React from "react";

const LikeComment = ({ commentClicked, setCommentClick }) => {
  return (
    <div className="like-unlike">
      <i class="fa fa-thumbs-o-up" aria-hidden="true">
        Like
      </i>
      <i class="fa fa-thumbs-o-down" aria-hidden="true">
        Unlike
      </i>
      <span
        onClick={() => {
          setCommentClick(!commentClicked);
        }}
      >
        Comment
      </span>
    </div>
  );
};

export default LikeComment;
