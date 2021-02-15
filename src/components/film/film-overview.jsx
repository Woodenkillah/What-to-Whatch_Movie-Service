import React from 'react';
import PropTypes from 'prop-types';

const FilmOverview = (props) => {
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{props.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{props.scoresCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{props.description}</p>

        <p className="movie-card__director"><strong>Director: {props.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {props.starring}</strong></p>
      </div>
    </React.Fragment>
  );
};

FilmOverview.propTypes = {
  description: PropTypes.string,
  rating: PropTypes.number,
  scoresCount: PropTypes.number,
  director: PropTypes.string,
  starring: PropTypes.string
};

export default FilmOverview;
