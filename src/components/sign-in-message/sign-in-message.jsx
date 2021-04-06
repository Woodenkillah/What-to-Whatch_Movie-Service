import React from 'react';
import PropTypes from 'prop-types';
import {AuthErrorTypes} from '../../constants';

const SignInMessage = ({errorType}) => {
  if (errorType === AuthErrorTypes.BAD_REQUEST) {
    return <p>Please enter a valid email address</p>;
  } else if (errorType === AuthErrorTypes.UNAUTHORIZED) {
    return <p>We can’t recognize this email <br/> and password combination. Please try again.</p>;
  } else {
    return null;
  }
};

SignInMessage.propTypes = {
  errorType: PropTypes.string
};

export default SignInMessage;
