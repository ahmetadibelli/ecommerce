import * as actionTypes from "./types/reviewActionTypes";
import * as apis from "../apis/reviewApis";

export const getAllReviews = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.GET_ALL_CAR_REVIEWS_REQUEST });
  try {
    const { data } = await apis.getAll(id);
    dispatch({
      type: actionTypes.GET_ALL_CAR_REVIEWS_SUCCESS,
      payload: data.data.reviews,
    });
  } catch (error) {
    // console.log(error?.response);
    const message = error?.response?.data?.err || "something went wrong";
    alert(message);
    dispatch({ type: actionTypes.GET_ALL_CAR_REVIEWS_FAIL, payload: message });
  }
};

export const create = (body, close) => async (dispatch) => {
  dispatch({ type: actionTypes.CREATE_REVIEW_REQUEST });

  try {
    const { data } = await apis.create(body);

    dispatch({
      type: actionTypes.CREATE_REVIEW_SUCCESS,
      payload: data.data.review,
    });

    close();
  } catch (error) {
    // console.log(error?.response);
    const message = error?.response?.data?.err || "something went wrong";
    alert(message);
    dispatch({ type: actionTypes.CREATE_REVIEW_FAIL, payload: message });
  }
};
