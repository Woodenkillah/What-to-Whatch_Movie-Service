import {DEFAULT_GENRE, LoadingStatuses} from '../../constants.js';
import {ActionType} from './action-types.js';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  filmsData: [],
  filmsLoadingStatus: LoadingStatuses.LOADING
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

    case ActionType.SET_LOADING:
      return {
        ...state,
        filmsLoadingStatus: action.payload,
      };

    default:
      return state;
  }
};

export {filmsReducer};
