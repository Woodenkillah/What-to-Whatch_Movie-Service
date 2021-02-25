import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {filmsData} from './mocks/films';
import {promoFilm} from './mocks/promo-film';

const container = document.getElementById(`root`);

ReactDOM.render(
    <App filmsData={filmsData} promoFilm={promoFilm}/>,
    container
);
