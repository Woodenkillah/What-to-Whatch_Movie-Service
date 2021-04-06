import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import PromoPoster from '../promo-poster/promo-poster';
import browserHistory from '../../browser-history';
import {connect} from 'react-redux';
import {setFavorite} from '../../redux/favorites/api-actions';
import {AuthStatuses, AppRoutes} from '../../constants';
import {getAuthorizationStatusSelector} from '../../redux/auth/selectors';
import {getFavoritesDataSelector} from '../../redux/favorites/selectors';
import {getPromoIsLoadingErrorSelector} from '../../redux/promo/selectors';

const PromoFilm = ({
  promoData,
  favoritesData,
  onSetFavorite,
  authorizationStatus,
  promoIsLoadingError
}) => {

  if (!promoData || promoIsLoadingError) {
    return <h2>There is no promo film currently available.</h2>;
  }

  const promoFilmId = promoData.id;
  const isFavorite = favoritesData.find(({id}) => id === promoFilmId);

  const handleFilmPlayerOpener = () => {
    browserHistory.push(`${AppRoutes.PLAYER}/${promoFilmId}`);
  };

  const handleAddFavoriteBtn = (status) => () => {
    if (authorizationStatus === AuthStatuses.NO_AUTH) {
      browserHistory.push(AppRoutes.LOGIN);
    }
    onSetFavorite(promoFilmId, Number(!status));
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
            onClick={handleAddFavoriteBtn(isFavorite)}
          >
            {
              isFavorite
                && <svg viewBox="0 0 18 14" width="18" height="14"><use xlinkHref="#in-list"></use></svg>
                || <svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#add"></use></svg>
            }
            <span>My list</span>
          </button>
        </div>
      </div>
    </div>
  );

};


PromoFilm.propTypes = {
  promoData: PropTypes.shape(generalPropValidation),
  favoritesData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ),
  onSetFavorite: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  promoIsLoadingError: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatusSelector(state),
  favoritesData: getFavoritesDataSelector(state),
  promoIsLoadingError: getPromoIsLoadingErrorSelector(state)
});

const mapDispatchToProps = {
  onSetFavorite: setFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(PromoFilm);
