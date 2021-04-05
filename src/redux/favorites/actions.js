import {ActionType} from './action-types';

export const ActionCreator = {
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
  }),

  clearFavorites: () => ({
    type: ActionType.CLEAR_FAVORITES,
    payload: []
  }),

  addFavorite: (favorite) => ({
    type: ActionType.ADD_FAVORITE,
    payload: favorite
  }),

  removeFavorite: (favorite) => ({
    type: ActionType.REMOVE_FAVORITE,
    payload: favorite
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
