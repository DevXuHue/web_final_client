import axios from "axios";

const axiosAdminClient = axios.create({
  baseURL: "http://localhost:4444/api/dev/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
  timeout: 60 * 1000,
});

axiosAdminClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosAdminClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosAdminClient;
