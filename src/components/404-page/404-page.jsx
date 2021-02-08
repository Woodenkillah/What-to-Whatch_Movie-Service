import React from 'react';

const Page404 = () => {

  const message404 = {
    color: `#C9B37E`,
    position: `absolute`,
    left: `200px`,
    right: `200px`,
    textAlign: `center`,
    top: `75%`
  };

  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">404 - Page is not found!</h1>
          <p style={message404}>Please check the correctness of URL or contact to an administrator, whoever he is...</p>
        </header>
      </div>
    </React.Fragment>
  );
};

export default Page404;
