import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {filmsData} from './mocks/films';
import {promoFilm} from './mocks/promo-film';
import {reducer} from './store/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
    reducer,
    composeWithDevTools()
);

const container = document.getElementById(`root`);

ReactDOM.render(
    <Provider store={store}>
      <App filmsData={filmsData} promoFilm={promoFilm}/>
    </Provider>,
    container
);
