import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../../props-validation/props-validation';
import GenreItem from './genre-item';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/actions';

const GenresList = ({activeGenre, changeGenre, updateFilteredFilmsList, genresList}) => {

  if (!genresList.length) {
    return (
      <h2>There are no filters currently available.</h2>
    );
  }

  return genresList.map((item, index) => {
    return (
      <GenreItem
        key={`gnr-${index}`}
        title={item}
        activeGenre={activeGenre}
        changeGenre={changeGenre}
        updateFilteredFilmsList={updateFilteredFilmsList}
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
  activeGenre: state.activeGenre,
  genresList: state.genresList
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  updateFilteredFilmsList() {
    dispatch(ActionCreator.updateFilteredFilmsList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
