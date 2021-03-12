import {DEFAULT_GENRE} from '../../constants.js';
import {actionType} from './action-types.js';
import {LoadingStatuses} from '../../constants';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  films: {
    filmsData: [],
    filmsLoadingStatus: LoadingStatuses.PENDING,
  }
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload
      };

    case actionType.LOAD_FILMS:
      return {
        ...state,
        films: {
          ...state.films,
          filmsData: action.payload,
        }
      };

    case actionType.SET_LOADING:
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
