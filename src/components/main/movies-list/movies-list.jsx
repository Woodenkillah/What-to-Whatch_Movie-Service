import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';

const MoviesList = (props) => {

  const movieItemsList = props.movieItemsData.map((item, index) => {
    return <MovieCard title={item.title} img={item.img} key={item.id + index}/>;
  });

  return (
    <React.Fragment>
      {movieItemsList}
    </React.Fragment>
  );
};

MoviesList.propTypes = {
  movieItemsData: PropTypes.array.isRequired
};

export default MoviesList;
