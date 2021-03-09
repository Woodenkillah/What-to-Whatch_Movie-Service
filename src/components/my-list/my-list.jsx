import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import FilmsList from '../films-list/films-list';
import Logo from '../../aux-components/logo';
import UserAvatar from '../../aux-components/user-avatar';
import Footer from '../../aux-components/footer';
import {connect} from 'react-redux';

const MyList = ({filmsData}) => {

  const favoriteFilms = filmsData.filter(({isFavorite}) => isFavorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <UserAvatar/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__movies-list">
          <FilmsList filmsListData={favoriteFilms}/>
        </div>
      </section>

      <Footer/>

    </div>
  );
};

MyList.propTypes = {
  filmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  )
};

const mapStateToProps = (state) => ({
  filmsData: state.filmsData
});

export default connect(mapStateToProps, null)(MyList);
