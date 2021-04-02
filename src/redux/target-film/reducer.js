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
  }
};

const targetFilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM:
      return {
        ...state,
        targetFilmData: action.payload

      };

    default:
      return state;
  }
};

export {targetFilmReducer, initialState};
