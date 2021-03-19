import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../aux-components/logo';
import Footer from '../../aux-components/footer';
import SignInForm from './sign-in-form';
import {AuthStatuses} from '../../constants';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthorizationStatusSelector} from '../../redux/auth/selectors';
import {AppRoutes} from '../../constants';

const SignIn = ({authorizationStatus}) => {

  if (authorizationStatus === AuthStatuses.AUTH) {
    return <Redirect to={AppRoutes.ROOT}/>;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <SignInForm/>
      </div>

      <Footer/>
    </div>
  );
};

SignIn.propTypes = {
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatusSelector(state)
});


export default connect(mapStateToProps, null)(SignIn);
