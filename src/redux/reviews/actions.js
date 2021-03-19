import {ActionType} from './action-types';

export const ActionCreator = {
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  }),

  setLoading: (status) => ({
    type: ActionType.SET_LOADING,
    payload: status
  })
};
