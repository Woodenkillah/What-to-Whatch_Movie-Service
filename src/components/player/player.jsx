import React from 'react';
import PropTypes from 'prop-types';
import {generalPropValidation} from '../../props-validation/props-validation';
import {useParams} from 'react-router-dom';
import VideoElement from './video-element';
import Page404 from '../404-page/404-page';
import {connect} from 'react-redux';
import {getFilmsDataSelector} from '../../redux/film/selectors';
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

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
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
