import axios from "axios";

const url = "/api/posts";

const createPost = (newPost) => {
  const request = axios.post(url, newPost);
  return request.then((res) => console.log(res));
};

export default { createPost };
