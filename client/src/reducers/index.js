import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import {
  categoryListReducers,
  addCategoryReducers,
  updateCategoryReducers,
  deleteCategoryReducers,
} from "./categoryReducer";

import {
  carListReducer,
  userCarListReducer,
  addCarReducer,
  updateCarReducer,
  deleteCarReducer,
} from "./carReducers";

import { cartReducer } from "./cartReducer";

import { updateUserReducer } from "./userReducer";

const state = {
  //auth
  auth: authReducer,
  //category
  categoryList: categoryListReducers,
  categoryAdd: addCategoryReducers,
  categoryUpdate: updateCategoryReducers,
  categoryDelete: deleteCategoryReducers,
  //car
  carList: carListReducer,
  userCarlist: userCarListReducer,
  addCar: addCarReducer,
  updateCar: updateCarReducer,
  deleteCar: deleteCarReducer,
  // user
  updateUser: updateUserReducer,
  //cart
  cart: cartReducer,
};

export default combineReducers(state);
