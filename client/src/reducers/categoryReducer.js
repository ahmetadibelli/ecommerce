import * as actionTypes from "../actions/types/adminActionTypes";
export const categoryListReducers = (
  state = {
    categories: [],
    error: null,
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORY_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case actionTypes.GET_CATEGORY_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case actionTypes.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    case actionTypes.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.filter(
          (item) => item._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export const addCategoryReducers = (
  state = {
    category: {},
    error: null,
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload,
      };
    case actionTypes.ADD_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const updateCategoryReducers = (
  state = {
    category: {},
    error: null,
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.UPDATE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload,
      };
    case actionTypes.UPDATE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const deleteCategoryReducers = (
  state = {
    error: null,
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.DELETE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.DELETE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
