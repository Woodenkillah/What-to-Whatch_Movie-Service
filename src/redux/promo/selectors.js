import get from 'lodash/get';

export const getPromoIsLoadingSelector = (state) => get(state, `promo.isLoading`, false);
export const getPromoDataSelector = (state) => get(state, `promo.promoData`, {});
export const getPromoIsLoadingErrorSelector = (state) => get(state, `favorites.isLoadingError`, [false]);
