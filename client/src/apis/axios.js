import axios from "axios";
import { getJWT } from "../helpers/jwtHandler";
const request = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

request.interceptors.request.use((config) => {
  const jwt = getJWT();
  if (jwt) config.headers.jwt = jwt;
  return config;
});

export default request;
