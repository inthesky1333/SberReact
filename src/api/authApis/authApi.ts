import axios from "axios";

export const authApi = axios.create({
  baseURL: "https://api.react-learning.ru",
  headers: {
    "Content-Type": "application/json",
  },
});
