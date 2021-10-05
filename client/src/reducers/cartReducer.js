import * as actionTypes from "../actions/types/cartActionTypes";

export const cartReducer = (state = { cars: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    case actionTypes.REMOVE_TO_CART:
      return {
        ...state,
        cars: state.cars.filter((car) => car._id !== action.payload),
      };
    default:
      return state;
  }
};
