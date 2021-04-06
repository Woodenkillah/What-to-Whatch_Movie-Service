import React from 'react';
import PropTypes from 'prop-types';
import LoadingProcess from '../loading-process/loading-process';
import LoadingFail from '../loading-fail/loading-fail';

const Spinner = ({isLoading, isLoadingError, loadedData, children}) => {

  if (!loadedData) {
    if (!isLoadingError && (isLoading || !isLoading)) {
      return <LoadingProcess/>;
    } else {
      return <LoadingFail/>;
    }
  } else {
    return children;
  }

};


Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isLoadingError: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Spinner;
