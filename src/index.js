import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {filmsData, featuredFilmsIdList} from './mocks/films';
import {promoFilm} from './mocks/promo-film';

const container = document.getElementById(`root`);

ReactDOM.render(
    <App promoFilm={promoFilm} filmsData={filmsData} featuredFilmsIdList={featuredFilmsIdList}/>,
    container
);
