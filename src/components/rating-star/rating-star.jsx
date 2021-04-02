import React from 'react';
import PropTypes from 'prop-types';

const RatingStar = ({starNumber, onReviewRating, defaultCheckedStar}) => {

  return (
    <React.Fragment>
      <input
        className="rating__input"
        id={`star-${starNumber}`}
        type="radio"
        name="rating"
        value={`${starNumber}`}
        defaultChecked={defaultCheckedStar === starNumber}
      />
      <label
        className="rating__label"
        htmlFor={`star-${starNumber}`}
        onClick={onReviewRating(starNumber)}
      >Rating {starNumber}</label>
    </React.Fragment>
  );
};

RatingStar.propTypes = {
  starNumber: PropTypes.number.isRequired,
  defaultCheckedStar: PropTypes.number.isRequired,
  onReviewRating: PropTypes.func.isRequired
};

export default React.memo(RatingStar);
