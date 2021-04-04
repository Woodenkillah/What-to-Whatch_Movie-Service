import {DEFAULT_GENRE, GENRES_LIST_LIMIT, SIMILAR_FILMS_LIMIT} from './constants';

export const getGenresList = (films) => {
  const rawGenres = films.map(({genre}) => genre);
  const uniqueGenres = new Set([...rawGenres]);
  const sortedGenres = Array.from(uniqueGenres).sort();
  const limitedSortedGenres = sortedGenres.slice(0, GENRES_LIST_LIMIT);

  return [DEFAULT_GENRE, ...limitedSortedGenres];
};

export const getSimilarFilms = (films, targetFilmId, targetFilmGenre) => {
  const allSimilarFilms = films.filter(({genre, id}) => genre === targetFilmGenre && id !== targetFilmId);

  let limitedSimilarFilms = [];

  if (allSimilarFilms.length > 0) {
    limitedSimilarFilms = allSimilarFilms.slice(0, SIMILAR_FILMS_LIMIT);
  }

  return limitedSimilarFilms;
};

export const getFilmRating = (rating) => {
  let textRating = ``;

  if (rating < 3) {
    textRating = `Bad`;
  } else if (rating >= 3 && rating < 5) {
    textRating = `Normal`;
  } else if (rating >= 5 && rating < 8) {
    textRating = `Good`;
  } else if (rating >= 8 && rating < 10) {
    textRating = `Very good`;
  } else {
    textRating = `Awesome`;
  }

  return textRating;
};

export const getCurrentDate = (date) => {

  const MONTHS_LIST = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

  const rawDate = new Date(date);
  const monthNumber = rawDate.getMonth();
  const day = rawDate.getDate();
  const year = rawDate.getFullYear();
  const currentDate = `${MONTHS_LIST[monthNumber]} ${day}, ${year}`;

  return currentDate;
};
