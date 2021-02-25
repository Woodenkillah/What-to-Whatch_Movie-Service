import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

const FilmCard = ({id, name, posterImage, onFilmHover}) => {

  const history = useHistory();

  const handleFilmCardOpener = () => {
    history.push({pathname: `/films/${id}`});
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onFilmHover ? () => onFilmHover(id) : null}
      onClick={handleFilmCardOpener}
    >
      <div className="small-movie-card__image">
        <img src={posterImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );

};

FilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  onFilmHover: PropTypes.func
};

export default FilmCard;
