import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {filmsData, genresList} from './mocks/films';
import {promoFilm} from './mocks/promo-film';
import {Provider} from 'react-redux';
import {store} from './redux/store';

ReactDOM.render(
    <Provider store={store}>
      <App filmsData={filmsData} genresList={genresList} promoFilm={promoFilm}/>
    </Provider>,
    document.getElementById(`root`)
);
