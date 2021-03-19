import React from 'react';
import PropTypes from 'prop-types';
import {ErrorTypes} from '../../constants';

const SignInMessage = ({errorType}) => {
  if (errorType === ErrorTypes.BAD_REQUEST) {
    return <p>Please enter a valid email address</p>;
  } else if (errorType === ErrorTypes.UNAUTHORIZED) {
    return <p>We can’t recognize this email <br/> and password combination. Please try again.</p>;
  } else {
    return null;
  }
};

SignInMessage.propTypes = {
  errorType: PropTypes.oneOfType([PropTypes.string, null]).isRequired
};

export default SignInMessage;
