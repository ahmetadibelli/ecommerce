import request from "./axios";

export const signup = (body) => request.post("/auth/signup", body);
export const signin = (body) => request.post("/auth/signin", body);
export const signout = () => request.get("/auth/signout");
