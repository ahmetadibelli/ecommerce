import * as actionTypes from "../actions/types/reviewActionTypes";

export const allCarReviewsReducer = (
  state = { reviews: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CAR_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ALL_CAR_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: action.payload,
      };
    case actionTypes.GET_ALL_CAR_REVIEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: [action.payload, ...state.reviews],
      };
    default:
      return state;
  }
};
export const createReviewReducer = (
  state = { review: {}, loading: false, error: null },
  action
) => {
  switch (action.type) {
    case actionTypes.CREATE_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        review: action.payload,
      };
    case actionTypes.CREATE_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
