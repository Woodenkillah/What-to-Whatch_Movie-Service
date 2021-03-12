import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import {useParams, useHistory, Link} from 'react-router-dom';
import classNames from 'classnames';
import FilmOverview from './film-tabs/film-overview';
import FilmDetails from './film-tabs/film-details';
import FilmReviews from './film-tabs/film-reviews';
import Logo from '../../aux-components/logo';
import UserAvatar from '../../aux-components/user-avatar';
import Footer from '../../aux-components/footer';
import Tabs from '../../aux-components/tabs';
import Page404 from '../404-page/404-page';
import {connect} from 'react-redux';
import {getFilmsData} from '../../redux/film/selectors';

const Film = ({filmsData, reviews}) => {

  const TAB_INDEX = {
    OVERVIEW: 0,
    DETAILS: 1,
    REVIEW: 2
  };

  const targetFilmId = parseInt((useParams().id), 10);
  const targetFilm = filmsData.find(({id}) => id === targetFilmId);

  if (!targetFilm) {
    return <Page404/>;
  }

  const [activeTab, setActiveTab] = React.useState(TAB_INDEX.OVERVIEW);

  const history = useHistory();

  const handleFilmPlayerOpener = () => {
    history.push({pathname: `/player/${targetFilmId}`});
  };

  const handleTabChange = (tabIndex) => (evt) => {
    evt.preventDefault();
    setActiveTab(tabIndex);
  };

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={targetFilm.background_image} alt={targetFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo/>
            <UserAvatar/>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{targetFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{targetFilm.genre}</span>
                <span className="movie-card__year">{targetFilm.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={handleFilmPlayerOpener}>
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
                <Link to={{pathname: `/films/${targetFilmId}/review`}} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={targetFilm.poster_image} alt={targetFilm.name} width="218" height="327" />
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
                  description={targetFilm.description}
                  rating={targetFilm.rating}
                  scoresCount={targetFilm.scores_count}
                  director={targetFilm.director}
                  starring={targetFilm.starring}
                />
                <FilmDetails
                  director={targetFilm.director}
                  starring={targetFilm.starring}
                  runTime={targetFilm.run_time}
                  genre={targetFilm.genre}
                  released={targetFilm.released}
                />
                <FilmReviews
                  targetFilmId={targetFilmId}
                  reviews={reviews}
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
            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Macbeth</a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Aviator</a>
              </h3>
            </article>
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
  ),
  reviews: PropTypes.objectOf(PropTypes.array).isRequired
};

const mapStateToProps = (state) => ({
  filmsData: getFilmsData(state)
});

export default connect(mapStateToProps, null)(Film);
