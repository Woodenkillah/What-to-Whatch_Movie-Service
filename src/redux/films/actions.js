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

  setIsLoading: (status) => ({
    type: ActionType.SET_IS_LOADING,
    payload: status
  }),

  setIsLoadingError: (status) => ({
    type: ActionType.SET_IS_LOADING_ERROR,
    payload: status
  })
};
