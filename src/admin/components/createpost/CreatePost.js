import React, { useState } from "react";
import "./createPost.css";
import {
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import PostService from "../../services/PostService";

function CreatePost() {
  const [dropdownState, setDropdownState] = useState("Select Category");
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");

  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleFileChange = (event) => {
    setFile(event.target.value);
  };

  const submitPost = (event) => {
    event.preventDefault();

    PostService.createPost({
      heading,
      content,
      file,
      category: dropdownState,
    });
  };

  return (
    <div className="create-post shadow">
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm">
            {" "}
            Post Heading
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={heading}
          onChange={handleHeadingChange}
        />
      </InputGroup>
      <div className="form-group">
        <textarea
          placeholder="Post Content"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          value={content}
          onChange={handleContentChange}
        />
      </div>
      <div className="create-post-buttons">
        <input
          type="file"
          name="picture"
          accept="image/*"
          value={file}
          onChange={handleFileChange}
        />
        <div>
          <DropdownButton id="dropdown-basic-button" title={dropdownState}>
            <Dropdown.Item
              href="#/"
              onClick={() => setDropdownState("General")}
            >
              General
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              onClick={() => setDropdownState("African Stories")}
            >
              African Stories
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              onClick={() => setDropdownState("Musics")}
            >
              Musics
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              onClick={() => setDropdownState("Sports")}
            >
              Sports
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              onClick={() => setDropdownState("News")}
            >
              News
            </Dropdown.Item>
          </DropdownButton>
          <button onClick={submitPost}>Post</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
