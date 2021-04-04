import {DEFAULT_GENRE} from '../../constants.js';
import {ActionType} from './action-types.js';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  filmsData: [],
  isLoading: false,
  isLoadingError: false
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload
      };

    case ActionType.LOAD_FILMS:
      return {
        ...state,
        filmsData: action.payload,
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

export {filmsReducer, initialState};
