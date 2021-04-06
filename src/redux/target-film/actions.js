import {ActionType} from './action-types';

export const ActionCreator = {
  loadFilm: (film) => ({
    type: ActionType.LOAD_FILM,
    payload: film
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
