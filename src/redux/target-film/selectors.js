import {LoadingStatuses} from '../../constants.js';
import get from 'lodash/get';

export const getTargetFilmLoadingSelector = (state) => get(state, `targetFilm.targetFilm.targetFilmLoadingStatus`, LoadingStatuses.PENDING);
export const getTargetFilmDataSelector = (state) => get(state, `targetFilm.targetFilm.targetFilmData`, {});
