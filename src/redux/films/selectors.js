import {DEFAULT_GENRE} from '../../constants.js';
import {createSelector} from 'reselect';
import get from 'lodash/get';

export const getActiveGenreSelector = (state) => get(state, `films.activeGenre`, DEFAULT_GENRE);
export const getFilmsIsLoadingSelector = (state) => get(state, `films.isLoading`, false);
export const getFilmsDataSelector = (state) => get(state, `films.filmsData`, []);
export const getFilmsIsLoadingErrorSelector = (state) => get(state, `favorites.isLoadingError`, [false]);

export const getFilteredFilmsDataSelector = createSelector(
    [getFilmsDataSelector, getActiveGenreSelector],
    (filmsData, activeGenre) => activeGenre === DEFAULT_GENRE
      ? filmsData
      : filmsData.filter(({genre}) => genre === activeGenre)
);
