import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import FilmsList from '../films-list/films-list';
import PromoFilm from './promo-film/promo-film';
import Logo from '../../aux-components/logo';
import AuthHolder from '../auth-holder/auth-holder';
import Footer from '../../aux-components/footer';
import GenresList from './genres-list/genres-list';
import ShowMore from './show-more/show-more';
import {connect} from 'react-redux';
import {DEFAULT_GENRE, DEFAULT_PAGE, FILMS_PER_PAGE} from '../../constants';
import {getGenresList} from '../../helpers';
import Spinner from '../../aux-components/spinner';
import {getActiveGenreSelector, getFilmsLoadingSelector, getFilmsDataSelector} from '../../redux/films/selectors';
import {getPromoLoadingSelector, getPromoDataSelector} from '../../redux/promo/selectors';

const Main = ({activeGenre, filmsData, promoData, promoLoadingStatus, filmsLoadingStatus}) => {

  const [page, setPage] = useState(DEFAULT_PAGE);

  const genresList = getGenresList(filmsData);
  const handleShowMore = () => setPage((currentPage) => currentPage + 1);

  const filteredFilms = activeGenre === DEFAULT_GENRE
    ? filmsData
    : filmsData.filter(({genre}) => genre === activeGenre);

  const limitedFilteredFilms = filteredFilms.slice(0, page * FILMS_PER_PAGE);

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
              <FilmsList filmsListData={limitedFilteredFilms}/>
            </Spinner>
          </div>

          <ShowMore onShowMore={handleShowMore} isInvisible={limitedFilteredFilms.length === filteredFilms.length}/>

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
