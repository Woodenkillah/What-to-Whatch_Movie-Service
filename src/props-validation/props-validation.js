import PropTypes from 'prop-types';

export const generalPropValidation = {
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
};
