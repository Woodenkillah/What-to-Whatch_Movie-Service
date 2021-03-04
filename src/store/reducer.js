import {ALL_GENRES, filmsData} from '../mocks/films';
import {actionType} from './actions';

const getGenresList = (films) => {
  const filteredGenresList = films
    .map(({genre}) => genre)
    .filter((item, index, array) => array.indexOf(item) === index)
    .sort();

  const genresList = [ALL_GENRES, ...filteredGenresList];
  return genresList;
};

const initialState = {
  defaultGenre: ALL_GENRES,
  activeGenre: ALL_GENRES,
  filmsData,
  filteredFilmsList: filmsData,
  genresList: getGenresList(filmsData)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.genre
      };

    case actionType.UPDATE_FILTERED_FILMS_LIST: {
      let filteredFilmsList = state.filmsData;

      if (state.activeGenre !== state.defaultGenre) {
        filteredFilmsList = state.filmsData.filter(({genre}) => genre === state.activeGenre);
      }

      return {
        ...state,
        filteredFilmsList
      };
    }

    default:
      return state;
  }
};

export {reducer};
