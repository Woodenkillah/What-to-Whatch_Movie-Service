import React from 'react';
import PropTypes from 'prop-types';
import LoadingProcess from './loading-process';
import LoadingFail from './loading-fail';
import {LoadingStatuses} from '../constants';

const Spinner = ({loadingStatus, children}) => {
  if (loadingStatus === LoadingStatuses.LOADING || loadingStatus === LoadingStatuses.PENDING) {
    return <LoadingProcess/>;
  } else if (loadingStatus === LoadingStatuses.FAILED) {
    return <LoadingFail/>;
  } else {
    return children;
  }
};

Spinner.propTypes = {
  loadingStatus: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

export default Spinner;
