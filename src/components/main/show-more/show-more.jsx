import React from 'react';
import PropTypes from 'prop-types';

const ShowMore = ({onShowMore, isInvisible}) => {

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onShowMore}
        style={{display: (isInvisible ? `none` : `block`)}}
      >
        Show more
      </button>
    </div>
  );
};

ShowMore.propTypes = {
  onShowMore: PropTypes.func.isRequired,
  isInvisible: PropTypes.bool.isRequired
};

export default ShowMore;
