import React from 'react';
import PropTypes from 'prop-types';

const RatingStar = ({starNumber, handleReviewRating, defaultCheckedStar}) => {
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
        onClick={handleReviewRating(starNumber)}
      >Rating {starNumber}</label>
    </React.Fragment>
  );
};

export default RatingStar;

RatingStar.propTypes = {
  starNumber: PropTypes.number.isRequired,
  defaultCheckedStar: PropTypes.number.isRequired,
  handleReviewRating: PropTypes.func.isRequired
};
