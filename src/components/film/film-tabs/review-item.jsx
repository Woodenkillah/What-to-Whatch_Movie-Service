import React from 'react';
import PropTypes from 'prop-types';
import {getCurrentDate} from '../../../helpers';

const ReviewItem = ({rating, comment, date, user}) => {

  const currentDate = getCurrentDate(date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user}</cite>
          <time className="review__date" dateTime={date}>{currentDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

ReviewItem.propTypes = {
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default ReviewItem;
