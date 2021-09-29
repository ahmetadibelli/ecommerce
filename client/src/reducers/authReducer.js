import * as actionTypes from "../actions/types/authActionTypes";

export const authReducer = (
  state = { user: {}, token: null, loading: false, error: null },
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
      };
    case actionTypes.SIGNUP_FAIL:
    case actionTypes.SIGNIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case actionTypes.SIGNOUT:
      return {
        ...state,
        user: {},
        token: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
