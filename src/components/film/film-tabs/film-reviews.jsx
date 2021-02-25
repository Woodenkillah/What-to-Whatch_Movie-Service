import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './review-item';

const FilmReviews = ({reviews, targetFilmId}) => {

  const renderReviewsList = () => {

    let reviewsList = [];
    const targetFilmReviews = reviews[targetFilmId];

    if (Object.keys(reviews).length > 0 && targetFilmReviews) {

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
      return reviewsList;
    } else {
      return (
        <h2>There are no reviews yet.</h2>
      );
    }
  };

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {renderReviewsList()}
      </div>
    </div>
  );
};

FilmReviews.propTypes = {
  reviews: PropTypes.objectOf(PropTypes.array).isRequired,
  targetFilmId: PropTypes.number.isRequired
};

export default FilmReviews;
