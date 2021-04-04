import {ActionType} from './action-types.js';

const initialState = {
  favoritesData: [],
  isLoading: false,
  isLoadingError: false
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favoritesData: action.payload,
      };

    case ActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case ActionType.SET_IS_LOADING_ERROR:
      return {
        ...state,
        isLoadingError: action.payload,
      };

    default:
      return state;
  }
};

export {favoritesReducer, initialState};
