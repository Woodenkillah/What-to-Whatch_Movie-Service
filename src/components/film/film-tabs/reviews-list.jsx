import React from 'react';
import PropTypes from 'prop-types';

const ReviewsList = ({children}) => {

  const reviewsItems = React.Children.toArray(children);

  if (reviewsItems.length > 0) {
    return reviewsItems;
  }
  return <h2>There are no reviews yet.</h2>;
};

ReviewsList.propTypes = {
  children: PropTypes.array.isRequired
};

export default ReviewsList;
