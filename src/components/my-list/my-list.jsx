import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import FilmCard from '../film-card/film-card';
import Logo from '../../aux-components/logo';
import Footer from '../../aux-components/footer';

const MyList = (props) => {

  const featuredFilms = React.useState({featuredFilmsIds: props.featuredFilmsIdList})[0];
  const {featuredFilmsIds} = featuredFilms;

  const featuredFilmsList = props.filmsData.map((item, index) => {
    return featuredFilmsIds.includes(item.id)
      ? <FilmCard name={item.name} posterImage={item.posterImage} id={item.id} key={item.id + index}/>
      : null;
  });

  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">

          <Logo/>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            {featuredFilmsList}
          </div>
        </section>

        <Footer/>

      </div>
    </React.Fragment>
  );
};

MyList.propTypes = {
  filmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired
  ).isRequired,
  featuredFilmsIdList: PropTypes.arrayOf(PropTypes.number.isRequired)
};

export default MyList;
