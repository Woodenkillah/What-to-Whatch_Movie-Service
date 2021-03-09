import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../../props-validation/props-validation';
import PromoPoster from './film-promo-poster';
import {useHistory} from 'react-router-dom';

const PromoFilm = ({promoData}) => {

  const history = useHistory();

  const handleFilmPlayerOpener = () => {
    history.push({pathname: `/player/${promoData.id}`});
  };

  const renderPromoFilm = () => {

    if (promoData) {
      return (
        <div className="movie-card__info">

          <PromoPoster name={promoData.name} posterImage={promoData.poster_image}/>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoData.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoData.genre}</span>
              <span className="movie-card__year">{promoData.released}</span>
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
      );
    } else {
      return <h2>There is no promo film currently available.</h2>;
    }

  };

  return renderPromoFilm();
};

PromoFilm.propTypes = {
  promoData: PropTypes.shape(generalPropValidation).isRequired
};

export default PromoFilm;
