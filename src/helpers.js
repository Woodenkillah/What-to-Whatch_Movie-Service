import {DEFAULT_GENRE} from './constants';

export const getGenresList = (films) => {
  const rawGenres = films.map(({genre}) => genre);
  const uniqueGenres = new Set([...rawGenres]);
  const sortedGenres = Array.from(uniqueGenres).sort();

  return [DEFAULT_GENRE, ...sortedGenres];
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
