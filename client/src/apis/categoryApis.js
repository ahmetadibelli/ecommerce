import request from "./axios";

export const getCategories = () => request.get("/category/category");
export const addCategory = (body) => request.post("/category/category", body);
export const updateCategory = (body, id) =>
  request.patch(`/category/category/${id}`, body);
export const deleteCategory = (id) =>
  request.delete(`/category/category/${id}`);
