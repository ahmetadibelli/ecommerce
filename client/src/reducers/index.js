import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

const state = {
  auth: authReducer,
};

export default combineReducers(state);
