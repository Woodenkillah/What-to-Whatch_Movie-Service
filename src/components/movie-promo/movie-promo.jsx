import React from 'react';
import PropTypes from 'prop-types';
import PromoPoster from './movie-promo-poster';

const MoviePromo = (props) => {

  const {title, gerne, releaseDate, img} = props.moviePromo;

  return (
    <React.Fragment>
      <div className="movie-card__info">
        <PromoPoster title={title} img={img}/>
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{gerne}</span>
            <span className="movie-card__year">{releaseDate}</span>
          </p>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

MoviePromo.propTypes = {
  moviePromo: PropTypes.object.isRequired
};

export default MoviePromo;
