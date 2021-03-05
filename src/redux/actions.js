export const actionType = {
  CHANGE_GENRE: `genresList/changeGenre`,
};

export const ActionCreator = {
  handleChangeGenre: (genre) => ({
    type: actionType.CHANGE_GENRE,
    payload: genre
  })
};
