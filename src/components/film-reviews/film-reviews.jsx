import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item';
import ReviewsList from '../reviews-list/reviews-list';
import Spinner from '../aux-components/spinner/spinner';
import {connect} from 'react-redux';
import {fetchReviewsList} from '../../redux/reviews/api-actions';
import {getReviewsListSelector, getReviewsIsLoadingSelector, getReviewsIsLoadingErrorSelector} from '../../redux/reviews/selectors';

const FilmReviews = ({targetFilmId, onLoadReviews, reviewsList, reviewsIsloading, reviewsIsLoadingError}) => {

  useEffect(() => {
    onLoadReviews(targetFilmId);
  }, [targetFilmId]);

  let targetReviewsList = [];

  if (reviewsList.length > 0) {
    targetReviewsList = reviewsList.map((review, idx) => {
      const {id, user, rating, comment, date} = review;
      return (
        <ReviewItem
          key={`${id}-${idx}`}
          user={user.name}
          rating={rating}
          comment={comment}
          date={date}
        />
      );
    });
  }

  return (
    <Spinner loadingStatus={reviewsIsloading} isLoadingError={reviewsIsLoadingError}>
      <ReviewsList>
        {targetReviewsList}
      </ReviewsList>
    </Spinner>
  );
};

FilmReviews.propTypes = {
  reviewsList: PropTypes.array.isRequired,
  targetFilmId: PropTypes.number.isRequired,
  onLoadReviews: PropTypes.func.isRequired,
  reviewsIsloading: PropTypes.bool.isRequired,
  reviewsIsLoadingError: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  reviewsList: getReviewsListSelector(state),
  reviewsIsloading: getReviewsIsLoadingSelector(state),
  reviewsIsLoadingError: getReviewsIsLoadingErrorSelector(state)
});

const mapDispatchToProps = {
  onLoadReviews: fetchReviewsList
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmReviews);
