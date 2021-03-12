import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Page404 from '../404-page/404-page';

const App = () => {

  const [reviews, setReviews] = React.useState({});

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


export default App;
