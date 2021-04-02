import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../constants';

const signInStyles = {
  color: `#d9cd8d`,
  textAlign: `right`,
  textDecoration: `none`,
  marginLeft: `auto`,
  padding: `5px`,
  border: `1px solid #d9cd8d`,
  borderRadius: `10px`
};

const SignInLink = () => {
  return (
    <Link style={signInStyles} to={AppRoutes.LOGIN}>
      <h2>Sign in</h2>
    </Link>
  );
};

export default SignInLink;
