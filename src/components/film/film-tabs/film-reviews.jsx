import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './review-item';
import ReviewsList from './reviews-list';
import Spinner from '../../../aux-components/spinner';
import {connect} from 'react-redux';
import {fetchReviewsList} from '../../../redux/reviews/api-actions';
import {getReviewsListSelector} from '../../../redux/reviews/selectors';
import {LoadingStatuses} from '../../../constants';

const FilmReviews = ({targetFilmId, onLoadReviews, reviewsList}) => {

  const [loadingStatus, setLoadingStatus] = useState(LoadingStatuses.LOADING);

  useEffect(() => {
    onLoadReviews(targetFilmId, setLoadingStatus);
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
    <Spinner loadingStatus={loadingStatus}>
      <ReviewsList>
        {targetReviewsList}
      </ReviewsList>
    </Spinner>
  );
};

FilmReviews.propTypes = {
  reviewsList: PropTypes.array.isRequired,
  targetFilmId: PropTypes.number.isRequired,
  onLoadReviews: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  reviewsList: getReviewsListSelector(state)
});

const mapDispatchToProps = {
  onLoadReviews: fetchReviewsList
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmReviews);
