import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import {useParams, Link} from 'react-router-dom';
import Logo from '../../aux-components/logo';
import ReviewForm from './review-form';

const AddReview = (props) => {

  const setReviewsData = React.useState([])[1];

  const handleAddReview = (newReviewItem) => {
    setReviewsData((currentReviews) => [...currentReviews, newReviewItem]);
  };

  const targetFilmId = parseFloat(useParams().id);

  const generalFilmsData = [...props.filmsData, ...props.promoFilm];
  const targetFilm = generalFilmsData.find((item) => item.id === targetFilmId);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={targetFilm.backgroundImage} alt={targetFilm.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">

            <Logo/>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={{pathname: `/films/${targetFilmId}`}} className="breadcrumbs__link">{targetFilm.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={targetFilm.posterImage} alt={`${targetFilm.name} poster`} width="218" height="327"/>
          </div>
        </div>

        <ReviewForm getFormData={handleAddReview} targetFilmId={targetFilmId}/>

      </section>
    </React.Fragment>
  );
};

AddReview.propTypes = {
  promoFilm: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ),
  filmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  )
};

export default AddReview;
