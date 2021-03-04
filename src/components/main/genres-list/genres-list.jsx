import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../../props-validation/props-validation';
import GenreItem from './genre-item';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/actions';

const GenresList = ({filmsData, defaultGenre, activeGenre, changeGenre}) => {

  if (!filmsData.length) {
    return (
      <h2>There are no filters currently available.</h2>
    );
  }

  const genresList = filmsData
    .map(({genre}) => genre)
    .filter((item, index, array) => array.indexOf(item) === index)
    .sort();

  const uniqueGenresList = [defaultGenre, ...genresList];

  return uniqueGenresList.map((item, index) => {
    return (
      <GenreItem
        key={`gnr-${index}`}
        title={item}
        activeGenre={activeGenre}
        changeGenre={changeGenre}
      />
    );
  });
};

GenresList.propTypes = {
  generalFilmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  )
};

const mapStateToProps = (state) => ({
  defaultGenre: state.defaultGenre,
  activeGenre: state.activeGenre,
  filmsData: state.filmsData
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
