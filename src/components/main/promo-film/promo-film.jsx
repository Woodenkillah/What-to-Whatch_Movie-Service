import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../../props-validation/props-validation';
import PromoPoster from './film-promo-poster';
import browserHistory from '../../../browser-history';
import {connect} from 'react-redux';
import {setFavorite} from '../../../redux/favorites/api-actions';
import {FavoriteStatuses, AuthStatuses} from '../../../constants';
import {getAuthorizationStatusSelector} from '../../../redux/auth/selectors';

const PromoFilm = ({promoData, onSetFavorite, authorizationStatus}) => {

  if (Object.keys(promoData).length === 0) {
    return <h2>There is no promo film currently available.</h2>;
  }

  const promoFilmId = promoData.id;

  const handleFilmPlayerOpener = () => {
    browserHistory.push({pathname: `/player/${promoFilmId}`});
  };

  const setFavoriteStatus = () => () => {
    onSetFavorite(promoFilmId, FavoriteStatuses.ADD_FAVORITE);
  };

  return (
    <div className="movie-card__info">

      <PromoPoster name={promoData.name} posterImage={promoData.posterImage}/>

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
          <button
            className="btn btn--list movie-card__button"
            type="button"
            onClick={setFavoriteStatus()}
            style={{display: (authorizationStatus === AuthStatuses.NO_AUTH ? `none` : `flex`)}}
          >
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
            <span>My list</span>
          </button>
        </div>
      </div>
    </div>
  );

};


PromoFilm.propTypes = {
  promoData: PropTypes.shape(generalPropValidation).isRequired,
  onSetFavorite: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatusSelector(state)
});

const mapDispatchToProps = {
  onSetFavorite: setFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(PromoFilm);
