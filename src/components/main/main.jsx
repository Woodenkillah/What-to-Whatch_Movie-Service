import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import FilmsList from '../films-list/films-list';
import PromoFilm from './promo-film/promo-film';
import Logo from '../../aux-components/logo';
import UserAvatar from '../../aux-components/user-avatar';
import Footer from '../../aux-components/footer';
import GenresList from './genres-list/genres-list';
import {connect} from 'react-redux';

const Main = ({generalFilmsData, promoFilmId, filteredFilmsList}) => {

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <Logo/>
          <UserAvatar/>
        </header>

        <div className="movie-card__wrap">
          <PromoFilm generalFilmsData={generalFilmsData} promoFilmId={promoFilmId}/>
        </div>
      </section >

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <GenresList/>
          </ul>

          <div className="catalog__movies-list">
            <FilmsList filmsListData={filteredFilmsList}/>
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
  generalFilmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ),
  promoFilmId: PropTypes.number.isRequired,
  filteredFilmsList: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  )
};

const mapStateToProps = (state) => ({
  filteredFilmsList: state.filteredFilmsList
});

export default connect(mapStateToProps, null)(Main);
