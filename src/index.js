import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import browserHistory from './browser-history';
import {store} from './redux/store/store';
import {fetchFilmsList} from './redux/films/api-actions';
import {fetchPromoFilm} from './redux/promo/api-actions';
import {checkAuth} from './redux/auth/api-actions';

store.dispatch(fetchFilmsList());
store.dispatch(fetchPromoFilm());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.getElementById(`root`)
);
