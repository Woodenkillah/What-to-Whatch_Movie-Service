import {ActionType} from './action-types';

export const ActionCreator = {
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
  }),

  setLoading: (status) => ({
    type: ActionType.SET_LOADING,
    payload: status
  })
};
