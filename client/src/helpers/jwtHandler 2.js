export const setAuth = (user, jwt) => {
  localStorage.setItem("jwt", jwt);
  localStorage.setItem("user", JSON.stringify(user));
};
export const getJWT = () => localStorage.getItem("jwt");
export const removeAuth = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
};
