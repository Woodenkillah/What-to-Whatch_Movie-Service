import {actionType} from './action-types';

export const ActionCreator = {
  loadPromo: (promo) => ({
    type: actionType.LOAD_PROMO,
    payload: promo
  })
};