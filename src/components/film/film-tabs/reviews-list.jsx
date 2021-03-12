import React from 'react';
import PropTypes from 'prop-types';

const ReviewsList = ({children}) => {
  if (children.length > 0) {
    return children;
  }
  return <h2>There are no reviews yet.</h2>;
};

ReviewsList.propTypes = {
  children: PropTypes.array.isRequired
};

export default ReviewsList;
