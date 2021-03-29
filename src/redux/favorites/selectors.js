import get from 'lodash/get';

export const getFavoritesDataSelector = (state) => get(state, `favorites.favoritesData`, []);
