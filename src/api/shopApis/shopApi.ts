import axios, { AxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: "https://api.react-learning.ru/products",
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }
  config.headers!["Content-Type"] = "application/json";
  return config;
});
