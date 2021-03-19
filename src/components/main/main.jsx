import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import FilmsList from '../films-list/films-list';
import PromoFilm from './promo-film/promo-film';
import Logo from '../../aux-components/logo';
import AuthHolder from '../auth-holder/auth-holder';
import Footer from '../../aux-components/footer';
import GenresList from './genres-list/genres-list';
import {connect} from 'react-redux';
import {DEFAULT_GENRE} from '../../constants';
import {getGenresList} from '../../helpers';
import Spinner from '../../aux-components/spinner';
import {getActiveGenreSelector, getFilmsLoadingSelector, getFilmsDataSelector} from '../../redux/film/selectors';
import {getPromoLoadingSelector, getPromoDataSelector} from '../../redux/promo/selectors';

const Main = ({activeGenre, filmsData, promoData, promoLoadingStatus, filmsLoadingStatus}) => {

  const filteredFilms = activeGenre === DEFAULT_GENRE
    ? filmsData
    : filmsData.filter(({genre}) => genre === activeGenre);

  const genresList = getGenresList(filmsData);

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <Logo/>
          <AuthHolder/>
        </header>

        <div className="movie-card__wrap">
          <Spinner loadingStatus={promoLoadingStatus}>
            <PromoFilm promoData={promoData}/>
          </Spinner>
        </div>
      </section >

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <GenresList genresList={genresList}/>
          </ul>

          <div className="catalog__movies-list">
            <Spinner loadingStatus={filmsLoadingStatus}>
              <FilmsList filmsListData={filteredFilms}/>
            </Spinner>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>

      </div>
    </React.Fragment >
  );

};

Main.propTypes = {
  filmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ),
  activeGenre: PropTypes.string.isRequired,
  promoData: PropTypes.shape(generalPropValidation).isRequired,
  promoLoadingStatus: PropTypes.string.isRequired,
  filmsLoadingStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  activeGenre: getActiveGenreSelector(state),
  filmsLoadingStatus: getFilmsLoadingSelector(state),
  filmsData: getFilmsDataSelector(state),
  promoLoadingStatus: getPromoLoadingSelector(state),
  promoData: getPromoDataSelector(state)
});

export default connect(mapStateToProps, null)(Main);
