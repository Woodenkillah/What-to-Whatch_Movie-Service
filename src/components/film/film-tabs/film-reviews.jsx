import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './review-item';

const FilmReviews = ({reviews, targetFilmId}) => {

  let reviewsList = [];

  if (Object.keys(reviews).length > 0) {

    const targetFilmReviews = reviews[targetFilmId];

    reviewsList = targetFilmReviews.map((review, index) => {
      const {rating, text, date, user} = review;
      return (
        <ReviewItem
          key={`rev-itm-${index}`}
          rating={rating}
          text={text}
          date={date}
          user={user}
        />
      );
    });
  }

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {
            reviewsList.length > 0
              ? reviewsList
              : <h2>There are no reviews yet.</h2>
          }
        </div>
      </div>
    </React.Fragment>
  );
};

FilmReviews.propTypes = {
  reviews: PropTypes.objectOf(PropTypes.array).isRequired,
  targetFilmId: PropTypes.number.isRequired
};

export default FilmReviews;
