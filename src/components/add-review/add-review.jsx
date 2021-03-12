import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import {useHistory, useParams, Link} from 'react-router-dom';
import Logo from '../../aux-components/logo';
import UserAvatar from '../../aux-components/user-avatar';
import ReviewForm from './review-form';
import Page404 from '../404-page/404-page';
import {connect} from 'react-redux';
import {getFilmsDataSelector} from '../../redux/film/selectors';

const MONTHS_LIST = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

const AddReview = ({filmsData, setReviews}) => {

  const targetFilmId = parseInt((useParams().id), 10);
  const targetFilm = filmsData.find((item) => item.id === targetFilmId);

  if (!targetFilm) {
    return <Page404/>;
  }

  const history = useHistory();

  const [formState, setFormState] = React.useState({
    rating: 1,
    text: ``,
    user: `Unknown author`
  });

  const handleReviewRating = (rating) => () => setFormState((prevState) => ({...prevState, rating}));

  const handleReviewText = (evt) => {
    const text = String(evt.target.value).trim();
    setFormState((prevState) => ({...prevState, text}));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const rawDate = new Date(Date.now());
    const monthNumber = rawDate.getMonth();
    const day = rawDate.getDate();
    const year = rawDate.getFullYear();
    const currentDate = `${MONTHS_LIST[monthNumber]} ${day}, ${year}`;

    const newReview = {
      rating: formState.rating,
      text: formState.text,
      user: formState.user,
      date: currentDate
    };

    setReviews((prevReviews) => {
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
        onReviewText={handleReviewText}
        onFormSubmit={handleFormSubmit}
        formState={formState}
      />
    </section>
  );
};

AddReview.propTypes = {
  filmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ),
  setReviews: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  filmsData: getFilmsDataSelector(state)
});

export default connect(mapStateToProps, null)(AddReview);
