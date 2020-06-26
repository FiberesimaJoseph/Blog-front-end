import axios from "axios";

const url = "/api/admins";

const login = (values) => {
  const request = axios.post(`${url}/login`, values);
  return request.then((data) => data.data);
};

const verify = (token) => {
  const request = axios({
    method: "POST",
    url: `${url}/tokenisvalid`,
    headers: {
      Authorization: token,
    },
  }).then((data) => data);
  return request;
};

export default { login, verify };
