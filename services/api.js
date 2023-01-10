import { isAuthenticated } from "./auth";
import { get, post, put, del } from "./http";

export const getAllUsers = () => {
  return get("/api/user/all");
};

export const signup = (data, role) => {
  return post(`/api/${role}/signup`, data);
};

export const me = (token) => {
  return get(`/api/user/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const create_reclamation = async (data) => {
  if (await isAuthenticated()) {
    return post(`/api/user/me/create-reclamation`, data);
  }
  return { status: 401 };
};

export const get_my_reclamations = (token) => {
  return get(`/api/user/me/get-my-reclamations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
