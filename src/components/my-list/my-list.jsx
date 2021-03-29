import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import FilmsList from '../films-list/films-list';
import Logo from '../../aux-components/logo';
import UserAvatar from '../../aux-components/user-avatar';
import Footer from '../../aux-components/footer';
import Spinner from '../../aux-components/spinner';
import {connect} from 'react-redux';
import {getFavoritesDataSelector} from '../../redux/favorites/selectors';
import {fetchFavoritesList} from '../../redux/favorites/api-actions';
import {LoadingStatuses} from '../../constants';

const MyList = ({favoritesData, onLoadFavorites}) => {

  const [loadingStatus, setLoadingStatus] = useState(LoadingStatuses.LOADING);

  useEffect(() => {
    onLoadFavorites(setLoadingStatus);
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
          <Spinner loadingStatus={loadingStatus}>

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
  onLoadFavorites: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  favoritesData: getFavoritesDataSelector(state),
});

const mapDispatchToProps = {
  onLoadFavorites: fetchFavoritesList
};

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
