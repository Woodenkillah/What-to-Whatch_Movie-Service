import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import VideoElement from '../player/video-element';
import PropTypes from 'prop-types';

const FilmCard = ({id, name, posterImage, src, handleFilmHover, activeFilmId}) => {

  const history = useHistory();

  const [isHovered, setIsHovered] = React.useState(false);

  let previewVideoTimeout = null;

  const showPreviewVideo = () => {
    previewVideoTimeout = setTimeout(() => {
      setIsHovered(true);
    }, 1000);
  };

  const cancelPreviewVideo = () => {
    setIsHovered(false);
    clearTimeout(previewVideoTimeout);
  };

  const handleFilmCardOpener = () => {
    clearTimeout(previewVideoTimeout);
    history.push({pathname: `/films/${id}`});
  };

  const renderCardContent = () => {
    if (isHovered && activeFilmId === id) {
      return (
        <VideoElement
          src={src}
          poster={posterImage}
          isPreview={true}
        />);
    } else {
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
    }
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={handleFilmHover ? () => handleFilmHover(id) : null}
      onMouseOver={() => showPreviewVideo()}
      onMouseOut={cancelPreviewVideo}
      onClick={handleFilmCardOpener}
    >
      {renderCardContent()}
    </article>
  );

};

FilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  handleFilmHover: PropTypes.func.isRequired,
  activeFilmId: PropTypes.number
};

export default FilmCard;
