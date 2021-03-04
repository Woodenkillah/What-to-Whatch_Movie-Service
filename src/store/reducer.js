import {ALL_GENRES, filmsData} from '../mocks/films';
import {actionType} from './actions';

const initialState = {
  defaultGenre: ALL_GENRES,
  activeGenre: ALL_GENRES,
  filmsData
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.genre
      };

    default:
      return state;
  }
};

export {reducer};
