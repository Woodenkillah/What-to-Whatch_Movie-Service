import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../../props-validation/props-validation';
import FilmCard from '../../film-card/film-card';

const FilmsList = ({generalFilmsData}) => {

  const [, setActiveFilm] = React.useState({activeFilmId: null});

  const filmHoverHandler = (filmId) => {
    setActiveFilm({
      activeFilmId: filmId
    });
  };

  const renderFilmsList = () => {

    if (generalFilmsData.length > 0) {

      const filmsList = generalFilmsData.map((item, index) => {
        return <FilmCard
          name={item.name}
          posterImage={item.posterImage}
          id={item.id}
          key={item.id + index}
          onFilmHover={filmHoverHandler}
        />;
      });
      return filmsList;

    } else {
      return <h2>The were no films added to the databse yet.</h2>;
    }

  };

  return renderFilmsList();
};

FilmsList.propTypes = {
  generalFilmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  )
};

export default FilmsList;
