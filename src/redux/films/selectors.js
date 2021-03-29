import {DEFAULT_GENRE, LoadingStatuses} from '../../constants.js';
import get from 'lodash/get';

export const getActiveGenreSelector = (state) => get(state, `films.activeGenre`, DEFAULT_GENRE);
export const getFilmsLoadingSelector = (state) => get(state, `films.filmsLoadingStatus`, LoadingStatuses.PENDING);
export const getFilmsDataSelector = (state) => get(state, `films.filmsData`, []);
