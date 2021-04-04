import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import {useParams, Link} from 'react-router-dom';
import classNames from 'classnames';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import Logo from '../aux-components/logo/logo';
import AuthHolder from '../auth-holder/auth-holder';
import Footer from '../aux-components/footer/footer';
import Tabs from '../aux-components/tabs/tabs';
import Page404 from '../404-page/404-page';
import FilmsList from '../films-list/films-list';
import {connect} from 'react-redux';
import {getFilmsDataSelector} from '../../redux/films/selectors';
import {getAuthorizationStatusSelector} from '../../redux/auth/selectors';
import {getTargetFilmDataSelector, getTargetFilmIsLoadingSelector} from '../../redux/target-film/selectors';
import browserHistory from '../../browser-history';
import {setFavorite} from '../../redux/favorites/api-actions';
import {fetchFilm} from '../../redux/target-film/api-actions';
import {FavoriteStatuses, AuthStatuses, TAB_INDEX} from '../../constants';
import {getSimilarFilms} from '../../helpers';

const Film = ({filmsData, targetFilmData, onSetFavorite, authorizationStatus, onFetchFilm}) => {

  const [activeTab, setActiveTab] = useState(TAB_INDEX.OVERVIEW);

  const targetFilmId = parseInt((useParams().id), 10);

  useEffect(() => {
    onFetchFilm(targetFilmId);
  }, [targetFilmId]);

  if (!targetFilmData.name) {
    return <Page404/>;
  }

  const handleFilmPlayerOpener = () => {
    browserHistory.push({pathname: `/player/${targetFilmId}`});
  };

  const handleTabChange = (tabIndex) => (evt) => {
    evt.preventDefault();
    setActiveTab(tabIndex);
  };

  const setFavoriteStatus = () => () => {
    onSetFavorite(targetFilmId, FavoriteStatuses.ADD_FAVORITE);
  };

  const similarFilmsList = getSimilarFilms(filmsData, targetFilmId, targetFilmData.genre);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={targetFilmData.backgroundImage} alt={targetFilmData.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo/>
            <AuthHolder/>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{targetFilmData.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{targetFilmData.genre}</span>
                <span className="movie-card__year">{targetFilmData.released}</span>
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
                <Link
                  to={{pathname: `/films/${targetFilmId}/review`}}
                  className="btn movie-card__button"
                  style={{display: (authorizationStatus === AuthStatuses.NO_AUTH ? `none` : `flex`)}}
                >Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={targetFilmData.posterImage} alt={targetFilmData.name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className={classNames(`movie-nav__item`, {"movie-nav__item--active": activeTab === TAB_INDEX.OVERVIEW})}
                    onClick={handleTabChange(TAB_INDEX.OVERVIEW)}
                  >
                    <a href='#' className="movie-nav__link">Overview</a>
                  </li>
                  <li className={classNames(`movie-nav__item`, {"movie-nav__item--active": activeTab === TAB_INDEX.DETAILS})}
                    onClick={handleTabChange(TAB_INDEX.DETAILS)}>
                    <a href='#' className="movie-nav__link">Details</a>
                  </li>
                  <li className={classNames(`movie-nav__item`, {"movie-nav__item--active": activeTab === TAB_INDEX.REVIEW})}
                    onClick={handleTabChange(TAB_INDEX.REVIEW)}>
                    <a href='#' className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>
              <Tabs activeTab={activeTab}>
                <FilmOverview
                  description={targetFilmData.description}
                  rating={targetFilmData.rating}
                  scoresCount={targetFilmData.scoresCount}
                  director={targetFilmData.director}
                  starring={targetFilmData.starring}
                />
                <FilmDetails
                  director={targetFilmData.director}
                  starring={targetFilmData.starring}
                  runTime={targetFilmData.runTime}
                  genre={targetFilmData.genre}
                  released={targetFilmData.released}
                />
                <FilmReviews
                  targetFilmId={targetFilmId}
                />
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__movies-list">
            <FilmsList filmsListData={similarFilmsList}/>
          </div>
        </section>
        <Footer/>
      </div>
    </React.Fragment>
  );

};

Film.propTypes = {
  filmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ).isRequired,
  onSetFavorite: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onFetchFilm: PropTypes.func.isRequired,
  targetFilmData: PropTypes.object.isRequired,
  targetFilmIsLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatusSelector(state),
  filmsData: getFilmsDataSelector(state),
  targetFilmData: getTargetFilmDataSelector(state),
  targetFilmIsLoading: getTargetFilmIsLoadingSelector(state)
});

const mapDispatchToProps = {
  onSetFavorite: setFavorite,
  onFetchFilm: fetchFilm
};

export default connect(mapStateToProps, mapDispatchToProps)(Film);
