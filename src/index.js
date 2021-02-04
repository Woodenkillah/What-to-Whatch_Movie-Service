import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const container = document.getElementById(`root`);

const promoFilmData = {
  title: `Kill Bill: Vol. 3`,
  gerne: `Action, Crime, Thriller`,
  releaseDate: `unknown`
};

const filmItems = [
  {title: `Reservoir Dogs`, poster: `poster is comming soon...`},
  {title: `Pulp Fiction`, poster: `poster is comming soon...`},
  {title: `Jackie Brown`, poster: `poster is comming soon...`},
  {title: `Death Proof`, poster: `poster is comming soon...`},
  {title: `Inglourious Basterds`, poster: `poster is comming soon...`},
  {title: `Django Unchained`, poster: `poster is comming soon...`},
  {title: `The Hateful Eight`, poster: `poster is comming soon...`},
  {title: `Once Upon a Time in Hollywood`, poster: `poster is comming soon...`}
];

ReactDOM.render(
    <App promoFilm={promoFilmData} films={filmItems}/>,
    container
);
