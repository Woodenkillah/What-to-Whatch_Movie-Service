import React from 'react';
import PropTypes from 'prop-types';
import Film from './film';

const Main = (props) => {

  const filmsList = props.films.map((item, index) => {
    return <Film title={item.title} poster={item.poster} key={Date.now() + index}/>;
  });

  return (

    <React.Fragment>
      <header>
        <h1>Promo film: {props.promoFilm.title}</h1>
        <p>Gerne: {props.promoFilm.gerne}</p>
        <p>Release date: {props.promoFilm.releaseDate}</p>
      </header>
      <div>
        <h2>What to Watch?!</h2>
        <p>If you are looking for an idea which film to watch tonight, this website is definitely for you!</p>
      </div>
      <div>
      </div>
      <div>
        <h2>Featured films</h2>
        {filmsList}
      </div>
    </React.Fragment>
  );

};

Main.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired
};

export default Main;
