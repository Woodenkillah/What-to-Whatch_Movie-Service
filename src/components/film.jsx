import React from 'react';
import PropTypes from 'prop-types';

const Film = (props) => {

  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <p>{props.poster}</p>
    </React.Fragment>
  );

};

Film.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Film;
