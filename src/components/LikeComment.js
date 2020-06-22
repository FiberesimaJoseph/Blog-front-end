import React from "react";

const LikeComment = ({ commentClicked, setCommentClick }) => {
  return (
    <div className="like-unlike">
      <button>
        <i class="fa fa-thumbs-o-up" aria-hidden="true">
          Like
        </i>
      </button>
      <button>
        <i class="fa fa-thumbs-o-down" aria-hidden="true">
          Unlike
        </i>
      </button>
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
