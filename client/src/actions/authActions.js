import * as actionTypes from "./types/authActionTypes";
import * as apis from "../apis/authApis";
import { setAuth, removeAuth } from "../helpers/jwtHandler";

export const signup = (body, push) => async (dispatch) => {
  dispatch({ type: actionTypes.SIGNUP_REQUEST });
  try {
    const { data } = await apis.signup(body);
    dispatch({
      type: actionTypes.SIGNUP_SUCCESS,
      payload: { user: data.data.user, token: data.token },
    });
    setAuth(data.data.user, data.token);
    push("/");
  } catch (error) {
    // console.log(error.response);
    const message = error?.response?.data?.err || "something went wrong";
    dispatch({ type: actionTypes.SIGNUP_FAIL, payload: message });
  }
};
export const signin = (body, push) => async (dispatch) => {
  dispatch({ type: actionTypes.SIGNIN_REQUEST });
  try {
    const { data } = await apis.signin(body);
    dispatch({
      type: actionTypes.SIGNIN_SUCCESS,
      payload: { user: data.data.user, token: data.token },
    });
    if (body.remember) setAuth(data.data.user, data.token);
    push("/");
  } catch (error) {
    // console.log(error.response);
    const message = error?.response?.data?.err || "something went wrong";
    dispatch({ type: actionTypes.SIGNIN_FAIL, payload: message });
  }
};

export const updateUser = (user, token) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_USER, payload: { user, token } });
};

export const signout = () => async (dispatch) => {
  try {
    await apis.signout();
    removeAuth();
    dispatch({ type: actionTypes.SIGNOUT });
    window.location.assign("/");
  } catch (error) {
    // console.log(error.response);
    const message = error?.response?.data?.err || "something went wrong";
    alert(message);
  }
};
