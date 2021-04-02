import {DEFAULT_GENRE, LoadingStatuses} from '../../constants.js';
import {createSelector} from 'reselect';
import get from 'lodash/get';

export const getActiveGenreSelector = (state) => get(state, `films.activeGenre`, DEFAULT_GENRE);
export const getFilmsLoadingSelector = (state) => get(state, `films.filmsLoadingStatus`, LoadingStatuses.PENDING);
export const getFilmsDataSelector = (state) => get(state, `films.filmsData`, []);

export const getFilteredFilmsDataSelector = createSelector(
    [getFilmsDataSelector, getActiveGenreSelector],
    (filmsData, activeGenre) => activeGenre === DEFAULT_GENRE
      ? filmsData
      : filmsData.filter(({genre}) => genre === activeGenre)
);
