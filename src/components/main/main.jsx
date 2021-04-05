import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import FilmsList from '../films-list/films-list';
import PromoFilm from '../promo-film/promo-film';
import Logo from '../aux-components/logo/logo';
import AuthHolder from '../auth-holder/auth-holder';
import Footer from '../aux-components/footer/footer';
import GenresList from '../genres-list/genres-list';
import ShowMore from '../show-more/show-more';
import {connect} from 'react-redux';
import {DEFAULT_PAGE, FILMS_PER_PAGE} from '../../constants';
import {getGenresList} from '../../helpers';
import Spinner from '../aux-components/spinner/spinner';
import {getFilmsIsLoadingSelector, getFilmsDataSelector, getFilteredFilmsDataSelector, getFilmsIsLoadingErrorSelector} from '../../redux/films/selectors';
import {getPromoIsLoadingSelector, getPromoDataSelector, getPromoIsLoadingErrorSelector} from '../../redux/promo/selectors';

const Main = ({filmsData, promoData, filmIsLoading, promoIsLoading, filteredFilms, filmsIsLoadingError, promoIsLoadingError}) => {

  const [page, setPage] = useState(DEFAULT_PAGE);

  const genresList = getGenresList(filmsData);
  const handleShowMore = () => setPage((currentPage) => {
    window.scrollTo({top: 0, behavior: `smooth`});
    return currentPage + 1;
  });

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
          <Spinner isLoading={promoIsLoading} isLoadingError={promoIsLoadingError}>
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
            <Spinner isLoading={filmIsLoading} isLoadingError={filmsIsLoadingError}>
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
  filteredFilms: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ),
  promoData: PropTypes.shape(generalPropValidation).isRequired,
  promoIsLoading: PropTypes.bool.isRequired,
  filmIsLoading: PropTypes.bool.isRequired,
  filmsIsLoadingError: PropTypes.bool.isRequired,
  promoIsLoadingError: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  filmIsLoading: getFilmsIsLoadingSelector(state),
  filmsData: getFilmsDataSelector(state),
  promoIsLoading: getPromoIsLoadingSelector(state),
  promoData: getPromoDataSelector(state),
  filteredFilms: getFilteredFilmsDataSelector(state),
  filmsIsLoadingError: getFilmsIsLoadingErrorSelector(state),
  promoIsLoadingError: getPromoIsLoadingErrorSelector(state),
});

export default connect(mapStateToProps, null)(Main);
