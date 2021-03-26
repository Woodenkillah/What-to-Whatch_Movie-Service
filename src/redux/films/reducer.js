import {DEFAULT_GENRE, LoadingStatuses} from '../../constants.js';
import {ActionType} from './action-types.js';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  films: {
    filmsData: [],
    filmsLoadingStatus: LoadingStatuses.PENDING,
  }
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
        films: {
          ...state.films,
          filmsData: action.payload,
        }
      };

    case ActionType.SET_LOADING:
      return {
        ...state,
        films: {
          ...state.films,
          filmsLoadingStatus: action.payload,
        }
      };

    default:
      return state;
  }
};

export {filmsReducer};
