import request from "./axios";

export const getCategories = () => request.get("/category");
export const addCategory = (body) => request.post("/category", body);
export const updateCategory = (body, id) =>
  request.patch(`/category/${id}`, body);
export const deleteCategory = (id) => request.delete(`/category/${id}`);
