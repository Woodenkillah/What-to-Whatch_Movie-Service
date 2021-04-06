import React from 'react';
import PropTypes from 'prop-types';
import SignInLink from '../sign-in-link/sign-in-link';
import UserAvatar from '../UI-components/user-avatar/user-avatar';
import {connect} from 'react-redux';
import {AuthStatuses} from '../../constants';
import {getAuthorizationStatusSelector} from '../../redux/auth/selectors';

const AuthHolder = ({authorizationStatus}) => {
  if (authorizationStatus === AuthStatuses.AUTH) {
    return <UserAvatar/>;
  }
  return <SignInLink/>;
};

AuthHolder.propTypes = {
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatusSelector(state)
});

export default connect(mapStateToProps, null)(AuthHolder);
