import { api } from "./axios";

export const list = async (status) => {
  return await api.get(`/tasks?status=${status}`);
};

export const update = async (id, data) => {
  return await api.put(`/tasks/${id}`, data);
};

export const deleteTask = async (id) => {
  return await api.delete(`/tasks/${id}`);
};

export const create = async (data) => {
  return await api.post(`/tasks`, data);
};
