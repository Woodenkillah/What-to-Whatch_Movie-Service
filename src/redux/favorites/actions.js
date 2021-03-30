import {ActionType} from './action-types';

export const ActionCreator = {
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
  })
};
