import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://testeorama.onrender.com", // ← базовий URL до бекенду
  headers: {
    "Content-Type": "application/json",
  },
});

// Додає Authorization заголовок автоматично, якщо є токен у localStorage
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
