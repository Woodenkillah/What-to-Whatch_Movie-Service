import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../../props-validation/props-validation';
import FilmCard from '../../film-card/film-card';

const FilmsList = (props) => {

  const state = React.useState({avtiveFilmId: ``});
  const setActiveFilm = state[1];

  const filmHoverHandler = (filmId) => {
    setActiveFilm({
      avtiveFilmId: filmId
    });
  };

  const generalFilmsData = [...props.filmsData, ...props.promoFilm];
  const filmsList = generalFilmsData.map((item, index) => {
    return <FilmCard name={item.name} posterImage={item.posterImage} id={item.id} key={item.id + index} onFilmHover={filmHoverHandler}/>;
  });

  return (
    <React.Fragment>
      {filmsList}
    </React.Fragment>
  );
};

FilmsList.propTypes = {
  promoFilm: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ),
  filmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  )
};

export default FilmsList;
