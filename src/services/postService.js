import axios from "axios";

const url = `/api/posts`;

const getAll = async () => {
  const posts = await axios.get(url);

  return posts.data;
};
const getAfricanStories = async () => {
  const posts = await axios.get(`${url}/africanstories`);

  return posts.data;
};
const getMusics = async () => {
  const posts = await axios.get(`${url}/musics`);

  return posts.data;
};
const getNews = async () => {
  const posts = await axios.get(`${url}/news`);

  return posts.data;
};
const getSports = async () => {
  const posts = await axios.get(`${url}/sports`);

  return posts.data;
};
const getGeneral = async () => {
  const posts = await axios.get(`${url}/general`);

  return posts.data;
};
export default {
  getAll,
  getAfricanStories,
  getMusics,
  getNews,
  getSports,
  getGeneral,
};
