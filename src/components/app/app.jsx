import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Page404 from '../404-page/404-page';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Main {...props}/>
        </Route>
        <Route path='/login' exact component={SignIn}/>
        <Route path='/mylist' exact component={MyList}/>
        <Route path='/films/:id' exact component={Film}/>
        <Route path='/films/:id/review' exact component={AddReview}/>
        <Route path='/player/:id' exact component={Player}/>
        <Route component={Page404}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  moviePromo: PropTypes.object.isRequired,
  movieItemsData: PropTypes.array.isRequired
};

export default App;
