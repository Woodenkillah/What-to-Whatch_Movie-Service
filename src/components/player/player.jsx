import React from 'react';
import PropTypes from 'prop-types';
import {useParams, useHistory} from 'react-router-dom';

const Player = (props) => {

  const targetFilmId = parseFloat(useParams().id);

  const generalFilmsData = [...props.filmsData, ...props.promoFilm];
  const targetFilm = generalFilmsData.find((item) => item.id === targetFilmId);

  const history = useHistory();

  const handlePlayerExit = () => {
    history.go(-1);
  };

  return (
    <React.Fragment>
      <div className="player">
        <video src={targetFilm.videoLink} className="player__video" poster={targetFilm.posterImage} controls autoPlay></video>

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
    </React.Fragment>
  );
};

Player.propTypes = {
  promoFilm: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        posterImage: PropTypes.string,
        previewImage: PropTypes.string,
        backgroundImage: PropTypes.string,
        backgroundColor: PropTypes.string,
        videoLink: PropTypes.string,
        previewVideoLink: PropTypes.string,
        description: PropTypes.string,
        rating: PropTypes.number,
        scoresCount: PropTypes.number,
        director: PropTypes.string,
        starring: PropTypes.string,
        runTime: PropTypes.number,
        gerne: PropTypes.string,
        released: PropTypes.number,
        isFavorite: PropTypes.bool
      }).isRequired,
  ),
  filmsData: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        posterImage: PropTypes.string,
        previewImage: PropTypes.string,
        backgroundImage: PropTypes.string,
        backgroundColor: PropTypes.string,
        videoLink: PropTypes.string,
        previewVideoLink: PropTypes.string,
        description: PropTypes.string,
        rating: PropTypes.number,
        scoresCount: PropTypes.number,
        director: PropTypes.string,
        starring: PropTypes.string,
        runTime: PropTypes.number,
        gerne: PropTypes.string,
        released: PropTypes.number,
        isFavorite: PropTypes.bool
      }).isRequired,
  )
};

export default Player;
