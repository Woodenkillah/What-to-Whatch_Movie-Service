import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SignInMessage from './sign-in-message';
import {connect} from 'react-redux';
import {login} from '../../redux/auth/api-actions';
import {getAuthErrorTypeSelector} from '../../redux/auth/selectors';

const SignInForm = ({onLogin, errorType}) => {

  const [loginData, setLoginData] = useState({
    email: ``,
    password: ``
  });

  const handleEmailData = (evt) => {
    const email = String(evt.target.value).trim();
    setLoginData((state) => ({
      ...state,
      email
    }));
  };

  const handlePasswordData = (evt) => {
    const password = String(evt.target.value).trim();
    setLoginData((state) =>({
      ...state,
      password
    }));
  };

  const handleLogin = (evt) => {
    evt.preventDefault();

    onLogin(loginData);
  };

  return (
    <form
      action="#"
      className="sign-in__form"
      onSubmit={handleLogin}
    >

      <div className="sign-in__message">
        <SignInMessage errorType={errorType}/>
      </div>

      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
            required={true}
            onChange={handleEmailData}
          />
          <label
            className="sign-in__label visually-hidden"
            htmlFor="user-email"
          >
            Email address
          </label>
        </div>
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
            required={true}
            onChange={handlePasswordData}
          />
          <label
            className="sign-in__label visually-hidden"
            htmlFor="user-password"
          >
            Password
          </label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
};

SignInForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  errorType: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  errorType: getAuthErrorTypeSelector(state)
});

const mapDispatchToProps = {
  onLogin: login
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
