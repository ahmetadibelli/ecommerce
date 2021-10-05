import * as actionTypes from "./types/cartActionTypes";

export const addCart = (car) => (dispatch) => {
  dispatch({ type: actionTypes.ADD_TO_CART, payload: car });
};

export const removeToCart = (id) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_TO_CART, payload: id });
};
