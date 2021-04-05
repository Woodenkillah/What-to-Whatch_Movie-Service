import {ActionType} from './action-types';

const initialState = {
  targetFilmData: {
    id: 0,
    name: ``,
    posterImage: ``,
    previewImage: ``,
    backgroundImage: ``,
    backgroundColor: ``,
    videoLink: ``,
    previewVideoLink: ``,
    description: ``,
    rating: 0,
    scoresCount: 0,
    director: ``,
    starring: [],
    runTime: 0,
    genre: ``,
    released: 0,
    isFavorite: false
  },
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
