import request from "./axios";

export const updateMe = (body) => request.patch("/user/user/update", body);
