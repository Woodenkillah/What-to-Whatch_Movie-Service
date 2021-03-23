import React from 'react';
import PropTypes from 'prop-types';
import {getFilmRating} from '../../../helpers';

const FilmOverview = ({description, rating, scoresCount, director, starring}) => {

  const starringList = starring.join(`, `);
  const textFilmRating = getFilmRating(rating);

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{textFilmRating}</span>
          <span className="movie-rating__count">{scoresCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring">
          <strong>
            {`Starring: ${starringList}`}
          </strong>

        </p>
      </div>
    </React.Fragment>
  );
};

FilmOverview.propTypes = {
  description: PropTypes.string,
  rating: PropTypes.number,
  scoresCount: PropTypes.number,
  director: PropTypes.string,
  starring: PropTypes.array
};

export default FilmOverview;
