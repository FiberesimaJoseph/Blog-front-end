import axios from "axios";

const url = "http://localhost:5000/api/posts";

const createPost = (newPost) => {
  const request = axios.post(url, newPost);
  return request.then((res) => console.log(res));
};

export default { createPost };
