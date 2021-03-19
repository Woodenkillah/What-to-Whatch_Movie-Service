import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import FilmsList from '../films-list/films-list';
import Logo from '../../aux-components/logo';
import UserAvatar from '../../aux-components/user-avatar';
import Footer from '../../aux-components/footer';
import Spinner from '../../aux-components/spinner';
import {connect} from 'react-redux';
import {getFavoritesDataSelector, getFavoritesLoadingStatus} from '../../redux/favorites/selectors';
import {fetchFavoritesList} from '../../redux/favorites/api-actions';

const MyList = ({favoritesData, onLoadFavorites, favoritesLoadingStatus}) => {

  useEffect(() => {
    onLoadFavorites();
  }, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <UserAvatar/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__movies-list">
          <Spinner loadingStatus={favoritesLoadingStatus}>
            <FilmsList filmsListData={favoritesData}/>
          </Spinner>
        </div>
      </section>

      <Footer/>

    </div>
  );
};

MyList.propTypes = {
  favoritesData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ),
  onLoadFavorites: PropTypes.func.isRequired,
  getFavoritesLoadingStatus: PropTypes.bool.isRequired,
  favoritesLoadingStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  favoritesData: getFavoritesDataSelector(state),
  favoritesLoadingStatus: getFavoritesLoadingStatus(state)
});

const mapDispatchToProps = {
  onLoadFavorites: fetchFavoritesList
};

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
