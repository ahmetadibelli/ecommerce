import request from "./axios";

export const getAll = (id) => request.get(`/review/review/all/${id}`);
export const create = (body) => request.post("/review/review", body);
