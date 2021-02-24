import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Page404 from '../404-page/404-page';

const App = ({filmsData, promoFilm}) => {
  const [reviews, setReviews] = React.useState({});

  let promoFilmId = null;

  if (promoFilm.length > 0) {
    promoFilmId = promoFilm[0].id;
  }

  const generalFilmsData = [...filmsData, ...promoFilm];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main generalFilmsData={generalFilmsData} promoFilmId={promoFilmId}/>
        </Route>
        <Route exact path='/login' component={SignIn}/>
        <Route exact path='/mylist'>
          <MyList generalFilmsData={generalFilmsData}/>
        </Route>
        <Route exact path='/films/:id'>
          <Film generalFilmsData={generalFilmsData} reviews={reviews}/>
        </Route>
        <Route exact path='/films/:id/review'>
          <AddReview generalFilmsData={generalFilmsData} setReviews={setReviews}/>
        </Route>
        <Route exact path='/player/:id'>
          <Player generalFilmsData={generalFilmsData}/>
        </Route>
        <Route component={Page404}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoFilm: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ).isRequired,
  filmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  ).isRequired,
  featuredFilmsIdList: PropTypes.arrayOf(PropTypes.number.isRequired)
};

export default App;
