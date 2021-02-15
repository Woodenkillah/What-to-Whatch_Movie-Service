import React from 'react';
import PropTypes from 'prop-types';
import PromoPoster from './film-promo-poster';
import {useHistory} from 'react-router-dom';

const PromoFilm = (props) => {

  const targetFilm = props.promoFilm[0];

  const history = useHistory();

  const handleFilmPlayerOpener = () => {
    history.push({pathname: `/player/${targetFilm.id}`});
  };

  return (
    <React.Fragment>
      <div className="movie-card__info">

        <PromoPoster name={targetFilm.name} posterImage={targetFilm.posterImage}/>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{targetFilm.name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{targetFilm.gerne}</span>
            <span className="movie-card__year">{targetFilm.released}</span>
          </p>

          <div className="movie-card__buttons">
            <button
              className="btn btn--play movie-card__button"
              type="button"
              onClick={handleFilmPlayerOpener}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

PromoFilm.propTypes = {
  promoFilm: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        posterImage: PropTypes.string,
        previewImage: PropTypes.string,
        backgroundImage: PropTypes.string,
        backgroundColor: PropTypes.string,
        videoLink: PropTypes.string,
        previewVideoLink: PropTypes.string,
        description: PropTypes.string,
        rating: PropTypes.number,
        scoresCount: PropTypes.number,
        director: PropTypes.string,
        starring: PropTypes.string,
        runTime: PropTypes.number,
        gerne: PropTypes.string,
        released: PropTypes.number,
        isFavorite: PropTypes.bool
      }).isRequired,
  ).isRequired
};

export default PromoFilm;
