import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

api.interceptors.request.use(async (config) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization =`Bearer ${token}`;
    }
    return config;
  } catch (error) {
    console.log(error);
  }
});

export default api;
