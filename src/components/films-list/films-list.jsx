import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import FilmCard from '../film-card/film-card';

const FilmsList = ({filmsListData}) => {

  const [activeFilmId, setActiveFilmId] = React.useState(``);
  const handleFilmHover = React.useCallback((filmId) => () => setActiveFilmId(filmId), []);

  if (filmsListData.length === 0) {
    return <h2>The were no films added yet.</h2>;
  }

  return filmsListData.map((item) => {
    return (
      <FilmCard
        name={item.name}
        posterImage={item.posterImage}
        id={item.id}
        src={item.previewVideoLink}
        key={`${item.id}-${item.name}`}
        onFilmHover={handleFilmHover}
        activeFilmId={activeFilmId}
      />
    );
  });

};

FilmsList.propTypes = {
  generalFilmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  )
};

export default FilmsList;
