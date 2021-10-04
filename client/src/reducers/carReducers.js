import * as actionTypes from "../actions/types/carActionTypes";

export const carListReducer = (
  state = { cars: [], loading: false, error: null, totalCars: 0 },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_CARS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: action.payload,
        totalCars: action.totalCars,
      };
    case actionTypes.GET_CARS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.ADD_CAR_SUCCESS:
      return {
        ...state,
        cars: [],
      };
    default:
      return state;
  }
};

export const userCarListReducer = (
  state = { cars: [], loading: false, error: null },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_USER_CARS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_USER_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: action.payload,
      };
    case actionTypes.GET_USER_CARS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addCarReducer = (
  state = { car: null, loading: false, error: null },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_CAR_REQUEST:
      return {
        ...state,
        loading: true,
        car: null,
      };
    case actionTypes.ADD_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        car: action.payload,
      };
    case actionTypes.ADD_CAR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        car: null,
      };
    default:
      return state;
  }
};
export const updateCarReducer = (
  state = { car: {}, loading: false, error: null },
  action
) => {
  switch (action.type) {
    case actionTypes.UPDATE_CAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.UPDATE_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        car: action.payload,
      };
    case actionTypes.UPDATE_CAR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteCarReducer = (
  state = { deleteId: null, loading: false, error: null },
  action
) => {
  switch (action.type) {
    case actionTypes.DELETE_CAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.DELETE_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteId: action.payload,
      };
    case actionTypes.DELETE_CAR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
