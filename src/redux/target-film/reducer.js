import {ActionType} from './action-types';
import {LoadingStatuses} from '../../constants';

const initialState = {
  targetFilm: {
    targetFilmData: {},
    targetFilmLoadingStatus: LoadingStatuses.PENDING
  }
};

const targetFilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM:
      return {
        ...state,
        targetFilm: {
          ...state.targetFilm,
          targetFilmData: action.payload
        }
      };

    case ActionType.SET_LOADING:
      return {
        ...state,
        targetFilm: {
          ...state.targetFilm,
          targetFilmLoadingStatus: action.payload
        }
      };

    default:
      return state;
  }
};

export {targetFilmReducer};
