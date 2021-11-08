import * as actionTypes from "../actions/types/authActionTypes";
import { UPDATE_USER_SUCCESS } from "../actions/types/userActionTypes";

export const authReducer = (
  state = {
    user: {},
    token: null,
    loading: false,
    error: null,
    signinErr: null,
    signupErr: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.SIGNUP_REQUEST:
    case actionTypes.SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SIGNIN_SUCCESS:
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
        signupErr: null,
        signinErr: null,
      };
    case actionTypes.SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        signupErr: action.payload,
      };
    case actionTypes.SIGNIN_FAIL:
      return {
        ...state,
        loading: false,
        signinErr: action.payload,
      };
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.SIGNOUT:
      return {
        ...state,
        user: {},
        token: null,
        loading: false,
        error: null,
        signinErr: null,
        signupErr: null,
      };
    default:
      return state;
  }
};
