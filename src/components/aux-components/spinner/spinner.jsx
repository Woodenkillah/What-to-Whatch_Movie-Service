import React from 'react';
import PropTypes from 'prop-types';
import LoadingProcess from '../loading-process/loading-process';
import LoadingFail from '../loading-fail/loading-fail';

const Spinner = ({isLoading, isLoadingError, children}) => {

  if (isLoading && !isLoadingError) {
    return <LoadingProcess/>;
  } else if (!isLoading && !isLoadingError) {
    return children;
  } else {
    return <LoadingFail/>;
  }
};

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isLoadingError: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Spinner;
