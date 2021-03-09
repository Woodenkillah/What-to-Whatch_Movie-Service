export const actionType = {
  CHANGE_GENRE: `genresList/changeGenre`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO: `data/loadPromo`
};

export const ActionCreator = {
  handleChangeGenre: (genre) => ({
    type: actionType.CHANGE_GENRE,
    payload: genre
  }),
  loadFilms: (films) => ({
    type: actionType.LOAD_FILMS,
    payload: films
  }),
  loadPromo: (promo) => ({
    type: actionType.LOAD_PROMO,
    payload: promo
  })
};
