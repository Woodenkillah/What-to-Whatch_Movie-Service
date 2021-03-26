import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import {useParams, Link} from 'react-router-dom';
import Logo from '../../aux-components/logo';
import UserAvatar from '../../aux-components/user-avatar';
import ReviewForm from './review-form';
import Page404 from '../404-page/404-page';
import {connect} from 'react-redux';
import {getFilmsDataSelector} from '../../redux/films/selectors';
import {getReviewsErrorTypeSelector} from '../../redux/reviews/selectors';
import {uploadUserReview} from '../../redux/reviews/api-actions';

const AddReview = ({filmsData, onUploadUserReview, reviewsErrorType}) => {

  const targetFilmId = parseInt((useParams().id), 10);
  const targetFilm = filmsData.find((item) => item.id === targetFilmId);

  if (!targetFilm) {
    return <Page404/>;
  }

  const [formState, setFormState] = React.useState({
    rating: 1,
    comment: ``,
    user: `Unknown author`
  });

  const handleReviewRating = (rating) => () => setFormState((prevState) => ({...prevState, rating}));

  const handleReviewComment = (evt) => {
    const comment = String(evt.target.value).trim();
    setFormState((prevState) => ({...prevState, comment}));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const newReview = {
      id: targetFilmId,
      rating: formState.rating,
      comment: formState.comment
    };

    onUploadUserReview(newReview);

  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={targetFilm.background_image} alt={targetFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">

          <Logo />

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

          <UserAvatar />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={targetFilm.poster_image} alt={`${targetFilm.name} poster`} width="218" height="327" />
        </div>
      </div>

      <ReviewForm
        onReviewRating={handleReviewRating}
        onReviewComment={handleReviewComment}
        onFormSubmit={handleFormSubmit}
        formState={formState}
        reviewsErrorType={reviewsErrorType}
      />
    </section>
  );
};

AddReview.propTypes = {
  filmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ),
  onUploadUserReview: PropTypes.func.isRequired,
  reviewsErrorType: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  filmsData: getFilmsDataSelector(state),
  reviewsErrorType: getReviewsErrorTypeSelector(state)
});

const mapDispatchToProps = {
  onUploadUserReview: uploadUserReview
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
