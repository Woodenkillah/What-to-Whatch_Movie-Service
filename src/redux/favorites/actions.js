import {ActionType} from './action-types';

export const ActionCreator = {
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
  }),

  setIsLoading: (status) => ({
    type: ActionType.SET_IS_LOADING,
    payload: status
  }),

  setLoadingError: (status) => ({
    type: ActionType.SET_LOADING_ERROR,
    payload: status
  })
};
