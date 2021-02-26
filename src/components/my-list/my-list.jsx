import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import FilmCard from '../film-card/film-card';
import Logo from '../../aux-components/logo';
import UserAvatar from '../../aux-components/user-avatar';
import Footer from '../../aux-components/footer';

const MyList = ({generalFilmsData}) => {

  const favoriteFilms = generalFilmsData.filter(({isFavorite}) => isFavorite);

  const [activeFilm, setActiveFilm] = React.useState({activeFilmId: null});

  const handleFilmHover = (filmId) => {
    setActiveFilm({
      activeFilmId: filmId
    });
  };

  const renderFavoriteFilms = () => {

    if (favoriteFilms.length > 0) {
      const favoriteFilmsList = favoriteFilms.map((item, index) => {
        return (
          <FilmCard
            name={item.name}
            posterImage={item.posterImage}
            id={item.id}
            src={item.videoLink}
            key={item.id + index}
            handleFilmHover={handleFilmHover}
            activeFilmId={activeFilm.activeFilmId}
          />
        );
      });
      return favoriteFilmsList;
    } else {
      return <h2>The favorite films list is empty.</h2>;
    }

  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <UserAvatar/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__movies-list">
          {renderFavoriteFilms()}
        </div>
      </section>

      <Footer/>

    </div>
  );
};

MyList.propTypes = {
  generalFilmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  )
};

export default MyList;
