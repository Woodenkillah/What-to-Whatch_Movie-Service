import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({isLoaded, children}) => {

  if (!isLoaded) {
    return <h2>Loading data...</h2>;
  }

  return children;
};

Spinner.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired
};

export default Spinner;
