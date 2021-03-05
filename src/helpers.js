import {DEFAULT_GENRE} from './constants';

export const getGenresList = (films) => {
  const rawGenres = films.map(({genre}) => genre);
  const uniqueGenres = new Set([...rawGenres]);
  const sortedGenres = Array.from(uniqueGenres).sort();

  return [DEFAULT_GENRE, ...sortedGenres];
};
