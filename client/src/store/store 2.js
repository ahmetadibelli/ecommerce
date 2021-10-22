import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rooteReducer from "../reducers";
import thunk from "redux-thunk";

const middlewares = [thunk];

export default createStore(
  rooteReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
