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
  searchCarListReducer,
  detailCarReducer,
} from "./carReducers";

import { cartReducer } from "./cartReducer";

import { updateUserReducer } from "./userReducer";

import { allCarReviewsReducer, createReviewReducer } from "./reviewReducer";

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
  searchCarList: searchCarListReducer,
  detailCar: detailCarReducer,
  // user
  updateUser: updateUserReducer,
  //cart
  cart: cartReducer,
  //reviews
  allCarReviews: allCarReviewsReducer,
  createReview: createReviewReducer,
};

export default combineReducers(state);
