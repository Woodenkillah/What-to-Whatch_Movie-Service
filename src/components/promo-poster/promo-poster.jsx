import React from 'react';
import PropTypes from 'prop-types';

const PromoPoster = ({name, posterImage}) => {

  return (
    <div className="movie-card__poster">
      <img src={posterImage} alt={name + ` poster`} width="218" height="327" />
    </div>
  );
};

PromoPoster.propTypes = {
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired
};

export default React.memo(PromoPoster);
