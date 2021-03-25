import {ActionType} from './action-types';

export const ActionCreator = {
  loadFilm: (film) => ({
    type: ActionType.LOAD_FILM,
    payload: film
  }),

  setLoading: (status) => ({
    type: ActionType.SET_LOADING,
    payload: status
  })
};
