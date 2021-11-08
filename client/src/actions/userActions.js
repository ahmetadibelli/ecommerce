import * as actionTypes from "./types/userActionTypes";
import * as apis from "../apis/userApis";
import { setAuth } from "../helpers/jwtHandler";

export const updateMe = (body) => async (dispatch, getState) => {
  dispatch({ type: actionTypes.UPDATE_USER_REQUEST });
  const { token } = getState().auth;
  try {
    const { data } = await apis.updateMe(body);
    dispatch({
      type: actionTypes.UPDATE_USER_SUCCESS,
      payload: data.data.user,
    });
    setAuth(data.data.user, token);
    alert("user updated");
  } catch (error) {
    // console.log(error?.response);
    const message = error?.response?.data?.err || "something went wrong";
    alert(message);
    dispatch({ type: actionTypes.UPDATE_USER_FAIL, payload: message });
  }
};
