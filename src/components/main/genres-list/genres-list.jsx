import React from 'react';
import PropTypes from 'prop-types';
import GenreItem from './genre-item';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../redux/films/actions';
import {getActiveGenreSelector} from '../../../redux/films/selectors';

const GenresList = ({genresList, activeGenre, onChangeGenre}) => {

  return genresList.map((title, idx) => {
    return (
      <GenreItem
        key={`gnr-${idx}`}
        title={title}
        activeGenre={activeGenre}
        onChangeGenre={onChangeGenre}
      />
    );
  });
};

GenresList.propTypes = {
  genresList: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({activeGenre: getActiveGenreSelector(state)});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(genre) {
    dispatch(ActionCreator.handleChangeGenre(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
