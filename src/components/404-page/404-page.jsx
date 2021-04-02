import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../constants';
import Logo from '../aux-components/logo/logo';

const message404 = {
  color: `#C9B37E`,
  position: `absolute`,
  left: `200px`,
  right: `200px`,
  textAlign: `center`,
  top: `75%`
};

const goBack = {
  color: `#C9B37E`,
  position: `absolute`,
  left: `200px`,
  right: `200px`,
  textAlign: `center`,
  bottom: `-100px`,
  cursor: `pointer`,
  fontSize: `24px`
};

const Page404 = () => {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <Logo/>

        <h1 className="page-title user-page__title">404 - Page is not found!</h1>
        <p style={message404}>Please check the correctness of URL or contact to an administrator, whoever he is...</p>
        <Link style={goBack} to={AppRoutes.ROOT}>Return to home page</Link>
      </header>
    </div>
  );
};

export default Page404;
