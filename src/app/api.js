import axios from "axios";
import { keys } from "../config/keys";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: keys.BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default api;
