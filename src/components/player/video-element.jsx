import React from 'react';
import PropTypes from 'prop-types';

const VideoElement = ({src, poster, isPreview}) => {

  const [isLoading, setIsLoading] = React.useState(true);

  const videoRef = React.useRef();

  React.useEffect(() => {
    videoRef.current.oncanplay = () => setIsLoading(false);

    return () => {
      videoRef.current.oncanplay = null;
    };
  });

  React.useEffect(() => {
    if (!isLoading) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isLoading]);

  return (
    <video
      src={src}
      poster={poster}
      className="player__video"
      muted={isPreview}
      controls={!isPreview}
      ref={videoRef}
    >
    </video>
  );
};

VideoElement.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPreview: PropTypes.bool
};

export default VideoElement;
