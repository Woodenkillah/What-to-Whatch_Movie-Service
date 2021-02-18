import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import FilmCard from '../film-card/film-card';
import Logo from '../../aux-components/logo';
import UserAvatar from '../../aux-components/user-avatar';
import Footer from '../../aux-components/footer';

const MyList = ({filmsData, promoFilm}) => {

  const generalFilmsData = [...filmsData, ...promoFilm];
  const favoriteFilms = generalFilmsData.filter(({isFavorite}) => isFavorite);

  const favoriteFilmsList = favoriteFilms.map((item, index) => {
    return (
      <FilmCard
        name={item.name}
        posterImage={item.posterImage}
        id={item.id}
        key={item.id + index}
      />
    );
  });

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <UserAvatar/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__movies-list">
          {
            favoriteFilmsList.length > 0
              ? favoriteFilmsList
              : <h1>The favorite films list is empty.</h1>
          }
        </div>
      </section>

      <Footer/>

    </div>
  );
};

MyList.propTypes = {
  promoFilm: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ).isRequired,
  filmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ).isRequired
};

export default MyList;
