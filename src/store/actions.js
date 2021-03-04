export const actionType = {
  CHANGE_GENRE: `genresList/changeGenre`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: actionType.CHANGE_GENRE,
    genre
  })
};
