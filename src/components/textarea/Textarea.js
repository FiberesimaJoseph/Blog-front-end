import React from "react";

const Textarea = () => {
  return (
    <div className="form-group">
      {/* <label htmlFor="exampleFormControlTextarea1">Comment</label> */}
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="5"
      />
      <button className="px-3">Submit</button>
    </div>
  );
};

export default Textarea;
