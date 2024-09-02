import axios from "axios";

const APIClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

APIClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    throw err;
  }
);

export default APIClient;
