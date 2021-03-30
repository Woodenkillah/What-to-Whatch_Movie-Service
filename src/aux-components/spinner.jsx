import React from 'react';
import PropTypes from 'prop-types';
import LoadingProcess from './loading-process';
import LoadingFail from './loading-fail';
import {LoadingStatuses} from '../constants';

const Spinner = ({loadingStatus, children}) => {
  if (loadingStatus === LoadingStatuses.LOADING) {
    return <LoadingProcess/>;
  } else if (loadingStatus === LoadingStatuses.FAILED) {
    return <LoadingFail/>;
  } else {
    return children;
  }
};

Spinner.propTypes = {
  loadingStatus: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Spinner;
