import React from 'react';
import CardContent from '../card-content/card-content';
import PropTypes from 'prop-types';
import browserHistory from '../../browser-history';
import {AppRoutes} from '../../constants';

let previewVideoTimeout = null;

const FilmCard = ({id, name, posterImage, src, onFilmHover, activeFilmId}) => {

  const [isHovered, setIsHovered] = React.useState(false);

  const showPreviewVideo = () => () => {
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
    window.scrollTo({top: 0, behavior: `smooth`});
    browserHistory.push(`${AppRoutes.FILMS}/${id}`);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onFilmHover(id)}
      onMouseOver={showPreviewVideo()}
      onMouseOut={cancelPreviewVideo}
      onClick={handleFilmCardOpener}
    >
      <CardContent
        isHovered={isHovered}
        activeFilmId={activeFilmId}
        id={id}
        name={name}
        posterImage={posterImage}
        src={src}
      />
    </article>
  );

};

FilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onFilmHover: PropTypes.func.isRequired,
  activeFilmId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
};

export default React.memo(FilmCard);
