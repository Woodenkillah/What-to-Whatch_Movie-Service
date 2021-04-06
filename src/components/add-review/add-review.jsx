import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import {Link} from 'react-router-dom';
import Logo from '../UI-components/logo/logo';
import UserAvatar from '../UI-components/user-avatar/user-avatar';
import AddReviewForm from '../add-review-form/add-review-form';
import Page404 from '../404-page/404-page';
import {connect} from 'react-redux';
import {getTargetFilmDataSelector} from '../../redux/target-film/selectors';
import {uploadUserReview} from '../../redux/reviews/api-actions';
import {AppRoutes} from '../../constants';

const AddReview = ({targetFilmData, onUploadUserReview}) => {

  if (Object.keys(targetFilmData).length === 0) {
    return <Page404/>;
  }

  const [errorType, setErrorType] = useState(``);

  const [formState, setFormState] = useState({
    rating: 1,
    comment: ``,
    user: `Unknown author`
  });

  const handleReviewRating = React.useCallback((rating) => () => setFormState((prevState) => ({...prevState, rating})), []);

  const handleReviewComment = (evt) => {
    const comment = String(evt.target.value).trim();
    setFormState((prevState) => ({...prevState, comment}));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const newReview = {
      id: targetFilmData.id,
      rating: formState.rating,
      comment: formState.comment
    };

    onUploadUserReview(newReview, setErrorType);

  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={targetFilmData.backgroundImage} alt={targetFilmData.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">

          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoutes.FILMS}/${targetFilmData.id}`} className="breadcrumbs__link">{targetFilmData.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserAvatar />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={targetFilmData.posterImage} alt={`${targetFilmData.name} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm
        onReviewRating={handleReviewRating}
        onReviewComment={handleReviewComment}
        onFormSubmit={handleFormSubmit}
        formState={formState}
        reviewsErrorType={errorType}
      />
    </section>
  );
};

AddReview.propTypes = {
  filmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ),
  targetFilmData: PropTypes.object.isRequired,
  onUploadUserReview: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  targetFilmData: getTargetFilmDataSelector(state)
});

const mapDispatchToProps = {
  onUploadUserReview: uploadUserReview
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
