import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {movieItemsData} from './mocks/movie-items';
import {moviePromo} from './mocks/movie-promo';

const container = document.getElementById(`root`);

ReactDOM.render(
    <App moviePromo={moviePromo} movieItemsData={movieItemsData}/>,
    container
);
