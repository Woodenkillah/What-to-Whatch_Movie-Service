import React from 'react';
import PropTypes from 'prop-types';
import RatingStar from './rating-star';

const COMMENTS_SIZES = {
  MIN: 50,
  MAX: 400
};

const helpMessageStyles = {
  general: {
    fontSize: `16px`,
    color: `black`,
    textAlign: `center`
  },
  important: {
    fontWeight: `700`
  }
};

const ReviewForm = ({onReviewRating, onReviewComment, onFormSubmit, formState, reviewsErrorType}) => {

  const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const defaultCheckedStar = formState.rating;

  const ratingStarsList = stars.map((starNumber) => {
    return (
      <RatingStar
        starNumber={starNumber}
        key={`str-${starNumber}`}
        onReviewRating={onReviewRating}
        defaultCheckedStar={defaultCheckedStar}
      />
    );
  });

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={onFormSubmit}
      >
        <div className="rating">
          <div className="rating__stars" >
            {ratingStarsList}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text" id="review-text"
            placeholder="Review text"
            minLength={COMMENTS_SIZES.MIN}
            maxLength={COMMENTS_SIZES.MAX}
            onChange={onReviewComment}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={!formState.comment || formState.comment.length < COMMENTS_SIZES.MIN}
            >Post</button>
          </div>

        </div>
      </form>
      <p style={helpMessageStyles.general}>
        Please note that your comment should contain from <span style={helpMessageStyles.important}>{COMMENTS_SIZES.MIN}</span> to <span style={helpMessageStyles.important}>{COMMENTS_SIZES.MAX}</span> signs.
      </p>
      {reviewsErrorType && <p style={helpMessageStyles.general}>Ooops! Something went wrong. Please check your network status or try again later.</p>}
    </div>
  );
};

ReviewForm.propTypes = {
  onReviewRating: PropTypes.func.isRequired,
  onReviewComment: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired,
  reviewsErrorType: PropTypes.string
};

export default ReviewForm;
