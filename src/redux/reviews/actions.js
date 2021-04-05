import {ActionType} from './action-types';

export const ActionCreator = {
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  }),

  setIsLoading: (status) => ({
    type: ActionType.SET_IS_LOADING,
    payload: status
  }),

  setIsLoadingError: (status) => ({
    type: ActionType.SET_IS_LOADING_ERROR,
    payload: status
  })
};
