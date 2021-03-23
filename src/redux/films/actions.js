import {ActionType} from './action-types';

export const ActionCreator = {
  handleChangeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),

  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),

  setLoading: (status) => ({
    type: ActionType.SET_LOADING,
    payload: status
  })
};
