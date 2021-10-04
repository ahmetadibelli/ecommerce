import * as actionTypes from "./types/categoryActionTypes";
import * as apis from "../apis/categoryApis";

export const getCategories = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_CATEGORY_LIST_REQUEST });
  try {
    const { data } = await apis.getCategories();
    dispatch({
      type: actionTypes.GET_CATEGORY_LIST_SUCCESS,
      payload: data.data.categories,
    });
  } catch (error) {
    console.log(error?.response);
    const message = error?.response?.data?.error || "something went wrong";
    alert(message);
    dispatch({ type: actionTypes.GET_CATEGORY_LIST_FAIL, payload: message });
  }
};
export const addCategory = (body) => async (dispatch) => {
  dispatch({ type: actionTypes.ADD_CATEGORY_REQUEST });
  try {
    const { data } = await apis.addCategory(body);
    dispatch({
      type: actionTypes.ADD_CATEGORY_SUCCESS,
      payload: data.data.category,
    });
  } catch (error) {
    console.log(error?.response);
    const message = error?.response?.data?.error || "something went wrong";
    alert(message);
    dispatch({ type: actionTypes.ADD_CATEGORY_FAIL, payload: message });
  }
};

export const updateCategory = (body, id) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_CATEGORY_REQUEST });
  try {
    const { data } = await apis.updateCategory(body, id);
    dispatch({
      type: actionTypes.UPDATE_CATEGORY_SUCCESS,
      payload: data.data.category,
    });
  } catch (error) {
    console.log(error?.response);
    const message = error?.response?.data?.error || "something went wrong";
    alert(message);
    dispatch({ type: actionTypes.UPDATE_CATEGORY_FAIL, payload: message });
  }
};
export const deleteCategory = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_CATEGORY_REQUEST });
  try {
    await apis.deleteCategory(id);
    dispatch({
      type: actionTypes.DELETE_CATEGORY_SUCCESS,
      payload: id,
    });
  } catch (error) {
    console.log(error?.response);
    const message = error?.response?.data?.error || "something went wrong";
    alert(message);
    dispatch({ type: actionTypes.DELETE_CATEGORY_FAIL, payload: message });
  }
};
