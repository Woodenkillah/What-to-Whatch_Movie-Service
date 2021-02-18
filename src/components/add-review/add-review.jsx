import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import {useHistory, useParams, Link} from 'react-router-dom';
import Logo from '../../aux-components/logo';
import UserAvatar from '../../aux-components/user-avatar';
import ReviewForm from './review-form';

const AddReview = (props) => {
  const history = useHistory();

  const [formState, setFormState] = React.useState({rating: 8, text: ``, date: String(new Date(Date.now())), user: `unknown`});

  const targetFilmId = Number(useParams().id);
  const generalFilmsData = [...props.filmsData, ...props.promoFilm];
  const targetFilm = generalFilmsData.find((item) => item.id === targetFilmId);

  const handleReviewRating = (rating) => () => setFormState((prevState) => ({...prevState, rating}));

  const handleReviewText = (evt) => {
    const text = String(evt.target.value).trim();
    setFormState((prevState) => ({...prevState, text}));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const newReview = {
      rating: formState.rating,
      text: formState.text,
      date: formState.date,
      user: formState.user
    };

    props.setReviews((prevReviews) => {
      const prevReviewPerFilm = prevReviews[targetFilmId] || [];
      const reviewsList = [...prevReviewPerFilm, newReview];

      return {...prevReviews, [targetFilmId]: reviewsList};
    });

    history.push({pathname: `/films/${targetFilmId}`});
  };

  return (
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

          <UserAvatar/>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={targetFilm.posterImage} alt={`${targetFilm.name} poster`} width="218" height="327"/>
        </div>
      </div>

      <ReviewForm
        handleReviewRating={handleReviewRating}
        handleReviewText={handleReviewText}
        handleFormSubmit={handleFormSubmit}
        formState={formState}
      />

    </section>
  );
};

AddReview.propTypes = {
  promoFilm: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ),
  filmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ),
  setReviews: PropTypes.func.isRequired
};

export default AddReview;
