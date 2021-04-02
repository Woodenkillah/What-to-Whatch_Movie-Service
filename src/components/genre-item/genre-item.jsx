import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const GenreItem = ({title, activeGenre, onChangeGenre}) => {

  const handleChangeGenre = (genre) => (evt) => {
    evt.preventDefault();
    onChangeGenre(genre);
  };

  return (
    <li
      className={classNames(`catalog__genres-item`, {"catalog__genres-item--active": activeGenre === title})}
      onClick={handleChangeGenre(title)}
    >
      <a href="#" className="catalog__genres-link">{title}</a>
    </li>
  );
};

GenreItem.propTypes = {
  title: PropTypes.string.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired
};

export default GenreItem;
