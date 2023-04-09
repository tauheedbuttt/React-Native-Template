import axios from "axios";
import { keys } from "../config/keys";

const api = axios.create({
  baseURL: keys.BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default api;
