import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Page404 from '../404-page/404-page';
import PrivateRoute from '../../aux-components/private-route';
import {AppRoutes} from '../../constants';

const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoutes.ROOT} component={Main}/>
        <Route exact path={AppRoutes.LOGIN} component={SignIn}/>
        <PrivateRoute exact path={AppRoutes.MY_LIST} component={MyList}/>
        <Route exact path={`${AppRoutes.FILMS}/:id`} component={Film} />
        <PrivateRoute exact path={`${AppRoutes.FILMS}/:id/review`} component={AddReview}/>
        <Route exact path={`${AppRoutes.PLAYER}:id`} component={Player}/>
        <Route component={Page404}/>
      </Switch>
    </BrowserRouter>
  );
};


export default App;
