import {LoadingStatuses} from '../../constants.js';
import get from 'lodash/get';

export const getPromoLoadingSelector = (state) => get(state, `promo.promoLoadingStatus`, LoadingStatuses.PENDING);
export const getPromoDataSelector = (state) => get(state, `promo.promoData`, {});
