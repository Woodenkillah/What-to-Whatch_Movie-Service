import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Page404 from '../404-page/404-page';
import {connect} from 'react-redux';
import {fetchFilmsList, fetchPromoFilm} from '../../redux/actions/api-actions';

const App = ({isDataLoaded, isPromoLoaded, onLoadFilmsData, onLoadPromoData}) => {

  const [reviews, setReviews] = React.useState({});

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadFilmsData();
    }
  }, [isDataLoaded]);

  useEffect(() => {
    if (!isPromoLoaded) {
      onLoadPromoData();
    }
  }, [isPromoLoaded]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>
        <Route exact path='/login' component={SignIn}/>
        <Route exact path='/mylist'>
          <MyList/>
        </Route>
        <Route exact path='/films/:id'>
          <Film reviews={reviews}/>
        </Route>
        <Route exact path='/films/:id/review'>
          <AddReview setReviews={setReviews}/>
        </Route>
        <Route exact path='/player/:id'>
          <Player/>
        </Route>
        <Route component={Page404}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  isPromoLoaded: PropTypes.bool.isRequired,
  onLoadPromoData: PropTypes.func.isRequired,
  onLoadFilmsData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  isDataLoaded: state.isDataLoaded,
  isPromoLoaded: state.isDataLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilmsData() {
    dispatch(fetchFilmsList());
  },
  onLoadPromoData() {
    dispatch(fetchPromoFilm());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
