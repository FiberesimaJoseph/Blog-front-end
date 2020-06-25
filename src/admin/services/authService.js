import axios from "axios";

const url = "http://localhost:5000/api/admins/";

const login = (values) => {
  const request = axios.post(`${url}/login`, values);
  return request.then((data) => data.data);
};

const verify = (token) => {
  const request = axios.post(`${url}/tokenisvalid`, token);
  return request.then((data) => data);
};

export default { login, verify };
