import axios from "axios";

import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

api.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const get = (path) => {
  return api.get(path);
};

export const post = (path, data) => {
  return api.post(path, data);
};

export const put = (path, data) => {
  return api.put(path, data);
};

export const del = (path) => {
  return api.delete(path);
};
