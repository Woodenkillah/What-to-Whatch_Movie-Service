import {ActionType} from './action-types';

const initialState = {
  targetFilmData: null,
  isLoading: false,
  isLoadingError: false
};

const targetFilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM:
      return {
        ...state,
        targetFilmData: action.payload

      };

    case ActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
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

export {targetFilmReducer, initialState};
