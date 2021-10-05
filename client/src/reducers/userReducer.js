import * as actionTypes from "../actions/types/userActionTypes";

export const updateUserReducer = (
  state = { loading: false, user: null, error: null },
  action
) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case actionTypes.UPDATE_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
