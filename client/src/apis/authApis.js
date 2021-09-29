import request from "./axios";

export const signup = (body) => request.post("/signup", body);
export const signin = (body) => request.post("/signin", body);
export const signout = () => request.get("/signout");
