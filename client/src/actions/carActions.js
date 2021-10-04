import * as actionTypes from "./types/carActionTypes";
import * as apis from "../apis/carApis";

export const getCars =
  (page = 1) =>
  async (dispatch) => {
    dispatch({ type: actionTypes.GET_CARS_REQUEST });
    const query = `page=${page}&limit=4&sort=-createdAt`;
    try {
      const { data } = await apis.allCars(query);
      dispatch({
        type: actionTypes.GET_CARS_SUCCESS,
        payload: data.data.cars,
        totalCars: data.totalDocuments,
      });
    } catch (error) {
      console.log(error.response);
      const message = error?.response?.data?.err || "something went wrong";
      dispatch({ type: actionTypes.GET_CARS_FAIL, payload: message });
    }
  };
// get all the user added cars
export const getUserCars = () => async (dispatch, getState) => {
  dispatch({ type: actionTypes.GET_USER_CARS_REQUEST });
  const { user } = getState().auth;
  try {
    const { data } = await apis.allUserCars(user._id);
    dispatch({
      type: actionTypes.GET_USER_CARS_SUCCESS,
      payload: data.data.cars,
    });
  } catch (error) {
    console.log(error.response);
    const message = error?.response?.data?.err || "something went wrong";
    dispatch({ type: actionTypes.GET_USER_CARS_FAIL, payload: message });
  }
};
export const addCar = (body, clearInput) => async (dispatch) => {
  dispatch({ type: actionTypes.ADD_CAR_REQUEST });
  try {
    const { data } = await apis.addCar(body);
    dispatch({ type: actionTypes.ADD_CAR_SUCCESS, payload: data.data.car });
    clearInput();
  } catch (error) {
    console.log(error.response);
    const message = error?.response?.data?.err || "something went wrong";
    dispatch({ type: actionTypes.ADD_CAR_FAIL, payload: message });
  }
};
export const updateCar = (body, id) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_CAR_REQUEST });
  try {
    const { data } = await apis.updateCar(body, id);
    dispatch({ type: actionTypes.UPDATE_CAR_SUCCESS, payload: data.data.car });
  } catch (error) {
    console.log(error.response);
    const message = error?.response?.data?.err || "something went wrong";
    dispatch({ type: actionTypes.UPDATE_CAR_FAIL, payload: message });
  }
};
export const deleteCar = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_CAR_REQUEST });
  try {
    await apis.deleteCar(id);
    dispatch({ type: actionTypes.DELETE_CAR_SUCCESS, payload: id });
  } catch (error) {
    console.log(error.response);
    const message = error?.response?.data?.err || "something went wrong";
    dispatch({ type: actionTypes.DELETE_CAR_FAIL, payload: message });
  }
};
