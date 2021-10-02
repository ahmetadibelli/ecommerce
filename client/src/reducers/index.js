import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import {
  categoryListReducers,
  addCategoryReducers,
  updateCategoryReducers,
  deleteCategoryReducers,
} from "./categoryReducer";

const state = {
  auth: authReducer,
  categoryList: categoryListReducers,
  categoryAdd: addCategoryReducers,
  categoryUpdate: updateCategoryReducers,
  categoryDelete: deleteCategoryReducers,
};

export default combineReducers(state);
