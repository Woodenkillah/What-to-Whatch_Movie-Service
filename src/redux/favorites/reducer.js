import {ActionType} from './action-types.js';
import {LoadingStatuses} from '../../constants';

const initialState = {
  favorites: {
    favoritesData: [],
    favoritesLoadingStatus: LoadingStatuses.PENDING,
  }
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          favoritesData: action.payload,
        }
      };

    case ActionType.SET_LOADING:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          favoritesLoadingStatus: action.payload,
        }
      };

    default:
      return state;
  }
};

export {favoritesReducer};
