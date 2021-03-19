import {ActionType} from './action-types';

export const ActionCreator = {
  loadPromo: (promo) => ({
    type: ActionType.LOAD_PROMO,
    payload: promo
  }),

  setLoading: (status) => ({
    type: ActionType.SET_LOADING,
    payload: status
  })
};
