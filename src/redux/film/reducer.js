import {DEFAULT_GENRE} from '../../constants.js';
import {actionType} from './action-types.js';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  films: {
    filmsData: [],
    isDataLoaded: false,
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
          filmsData: action.payload,
          isDataLoaded: true
        }
      };

    default:
      return state;
  }
};

export {filmsReducer};
