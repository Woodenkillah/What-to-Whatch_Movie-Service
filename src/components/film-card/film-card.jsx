import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

const FilmCard = (props) => {

  const history = useHistory();

  const handleFilmCardOpener = () => {
    history.push({pathname: `/films/${props.id}`});
  };

  return (
    <React.Fragment>
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={props.onFilmHover ? () => props.onFilmHover(props.id) : null}
        onClick={() => handleFilmCardOpener()}
      >
        <div className="small-movie-card__image">
          <img src={props.posterImage} alt={props.name} width="280" height="175"/>
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${props.id}`}>{props.name}</Link>
        </h3>
      </article>
    </React.Fragment>
  );

};

FilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  onFilmHover: PropTypes.func
};

export default FilmCard;
