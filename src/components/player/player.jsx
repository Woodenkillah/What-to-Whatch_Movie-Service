import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import {useParams} from 'react-router-dom';
import VideoElement from './video-element';
import Page404 from '../404-page/404-page';
import {connect} from 'react-redux';
import {getFilmsDataSelector} from '../../redux/films/selectors';
import browserHistory from '../../browser-history';

const Player = ({filmsData}) => {

  const handlePlayerExit = () => {
    browserHistory.go(-1);
  };

  const targetFilmId = parseInt((useParams().id), 10);
  const targetFilm = filmsData.find((item) => item.id === targetFilmId);

  if (!targetFilm) {
    return <Page404/>;
  }

  return (
    <div className="player">
      <VideoElement
        src={targetFilm.video_link}
        poster={targetFilm.poster_image}
      />

      <button type="button" className="player__exit" onClick={handlePlayerExit}>Exit</button>
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
