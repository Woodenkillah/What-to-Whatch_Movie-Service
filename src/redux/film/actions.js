import {actionType} from './action-types';

export const ActionCreator = {
  handleChangeGenre: (genre) => ({
    type: actionType.CHANGE_GENRE,
    payload: genre
  }),

  loadFilms: (films) => ({
    type: actionType.LOAD_FILMS,
    payload: films
  })
};
