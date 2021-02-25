import React from 'react';
import PropTypes from 'prop-types';

const ReviewItem = ({rating, text, date, user}) => {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{user}</cite>
          <time className="review__date" dateTime="2016-12-24">{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

ReviewItem.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default ReviewItem;
