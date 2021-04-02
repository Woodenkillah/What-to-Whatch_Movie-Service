import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import {useParams} from 'react-router-dom';
import VideoElement from '../video-element/video-element';
import Page404 from '../404-page/404-page';
import {connect} from 'react-redux';
import {getFilmsDataSelector} from '../../redux/films/selectors';
import browserHistory from '../../browser-history';

const Player = ({filmsData}) => {

  const targetFilmId = parseInt((useParams().id), 10);
  const targetFilm = filmsData.find((item) => item.id === targetFilmId);

  if (!targetFilm) {
    return <Page404/>;
  }

  const handlePlayerExit = () => {
    browserHistory.go(-1);
  };

  return (
    <div className="player">
      <VideoElement
        src={targetFilm.videoLink}
        poster={targetFilm.posterImage}
        isPreview={false}
      />

      <button
        type="button"
        className="player__exit"
        onClick={handlePlayerExit}
      >Exit</button>
    </div>
  );

};

Player.propTypes = {
  filmsData: PropTypes.arrayOf(
      PropTypes.shape(generalPropValidation).isRequired,
  )
};

const mapStateToProps = (state) => ({
  filmsData: getFilmsDataSelector(state)
});

export default connect(mapStateToProps, null)(Player);
