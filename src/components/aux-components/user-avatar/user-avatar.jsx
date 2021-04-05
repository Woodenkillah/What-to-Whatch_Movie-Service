import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../../redux/auth/api-actions';
import {getUserEmailSelector, getUserAvatarSelector} from '../../../redux/auth/selectors';
import browserHistory from '../../../browser-history';
import {AppRoutes} from '../../../constants';

const userEmailBlockStyles = {
  containerStyle: {
    display: `flex`
  },
  avatarStyle: {
    cursor: `pointer`
  },
  authInfoStyle: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    border: `1px solid #DFCF77`,
    borderRadius: `10px`,
    marginLeft: `10px`,
    color: `#DFCF77`,
    padding: `5px 7px`
  },
  linkStyle: {
    cursor: `pointer`
  },
  textStyle: {
    fontSize: `16px`,
    color: `#DFCF77`,
    marginTop: `0`,
    marginBottom: `0`,
  }
};

const {containerStyle, avatarStyle, authInfoStyle, linkStyle, textStyle} = userEmailBlockStyles;

const UserAvatar = ({onLogout, userEmail, userAvatar}) => {

  const handleMylistOpener = () => {
    browserHistory.push(AppRoutes.MY_LIST);
  };

  return (
    <div className="user-block" style={containerStyle}>
      <div
        className="user-block__avatar"
        onClick={handleMylistOpener}
      >
        <img
          style={avatarStyle}
          src={userAvatar}
          alt="User avatar"
          width="63"
          height="63" />
      </div>
      <div style={authInfoStyle}>
        <p style={textStyle}>{userEmail}</p>
        <a
          style={linkStyle}
          className="user-block__link"
          onClick={onLogout}
        >
          Logout
        </a>
      </div>
    </div>
  );
};

UserAvatar.propTypes = {
  onLogout: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  userEmail: getUserEmailSelector(state),
  userAvatar: getUserAvatarSelector(state)
});

const mapDispatchToProps = {
  onLogout: logout
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAvatar);
