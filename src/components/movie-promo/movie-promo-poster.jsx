import React from 'react';
import PropTypes from 'prop-types';

const PromoPoster = (props) => {
  return (
    <React.Fragment>
      <div className="movie-card__poster">
        <img src={props.img} alt={props.title + ` poster`} width="218" height="327" />
      </div>
    </React.Fragment>
  );
};

PromoPoster.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PromoPoster;
