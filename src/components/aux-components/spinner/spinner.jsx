import React from 'react';
import PropTypes from 'prop-types';
import LoadingProcess from '../loading-process/loading-process';
import LoadingFail from '../loading-fail/loading-fail';

const Spinner = ({loadingStatus, isLoadingError, children}) => {

  if (loadingStatus && !isLoadingError) {
    return <LoadingProcess/>;
  } else if (!loadingStatus && !isLoadingError) {
    return children;
  } else {
    return <LoadingFail/>;
  }
};

Spinner.propTypes = {
  loadingStatus: PropTypes.bool.isRequired,
  isLoadingError: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Spinner;
