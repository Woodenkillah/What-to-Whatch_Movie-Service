import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoElement from '../video-element/video-element';

const CardContent = ({id, name, posterImage, src, isHovered, activeFilmId}) => {

  if (isHovered && activeFilmId === id) {
    return (
      <VideoElement
        src={src}
        poster={posterImage}
        isPreview={true}
      />);
  }

  return (
    <React.Fragment>
      <div className="small-movie-card__image">
        <img src={posterImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </React.Fragment>
  );
};

CardContent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isHovered: PropTypes.bool.isRequired,
  activeFilmId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
};

export default CardContent;
