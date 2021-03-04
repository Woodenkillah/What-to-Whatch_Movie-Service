export const actionType = {
  CHANGE_GENRE: `genresList/changeGenre`,
  UPDATE_FILTERED_FILMS_LIST: `genresList/updateFilteredFilmsList`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: actionType.CHANGE_GENRE,
    genre
  }),
  updateFilteredFilmsList: () => ({
    type: actionType.UPDATE_FILTERED_FILMS_LIST
  })
};
