import {LoadingStatuses} from '../../constants';
import get from 'lodash/get';

export const getFavoritesDataSelector = (state) => get(state, `favorites.favorites.favoritesData`, []);
export const getFavoritesLoadingStatus = (state) => get(state, `favorites.favorites.favoritesLoadingStatus`, LoadingStatuses.PENDING);
