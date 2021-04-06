import React from 'react';
import PropTypes from 'prop-types';
import LoadingFail from '../UI-components/loading-fail/loading-fail';

const ReviewsList = ({children, isLoadingError}) => {

  const reviewsItems = React.Children.toArray(children);

  if (reviewsItems.length === 0 && !isLoadingError) {
    return <h2>There are no reviews yet.</h2>;
  } else if (isLoadingError) {
    return <LoadingFail/>;
  }

  const firstReviewsCol = reviewsItems.slice(0, Math.ceil(reviewsItems.length / 2));
  const secondReviewsCol = reviewsItems.slice(Math.ceil(reviewsItems.length / 2));

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstReviewsCol}
      </div>
      <div className="movie-card__reviews-col">
        {secondReviewsCol}
      </div>
    </div>
  );
};

ReviewsList.propTypes = {
  children: PropTypes.array.isRequired,
  isLoadingError: PropTypes.bool.isRequired,
};

export default ReviewsList;
