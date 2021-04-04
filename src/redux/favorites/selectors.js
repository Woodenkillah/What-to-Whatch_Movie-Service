import get from 'lodash/get';

export const getFavoritesDataSelector = (state) => get(state, `favorites.favoritesData`, []);
export const getIsLoadingSelector = (state) => get(state, `favorites.isLoading`, [true]);
export const getIsLoadingErrorSelector = (state) => get(state, `favorites.isLoadingError`, [false]);
