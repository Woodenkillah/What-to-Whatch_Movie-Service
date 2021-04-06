import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthorizationStatusSelector} from '../../redux/auth/selectors';
import {AuthStatuses, AppRoutes} from '../../constants';

const PrivateRoute = ({component: Component, authorizationStatus, ...params}) => {
  return (
    <Route
      render={(props) => authorizationStatus === AuthStatuses.AUTH && <Component {...props}/> || <Redirect to={AppRoutes.LOGIN}/>}
      {...params}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatusSelector(state)
});

export default connect(mapStateToProps, null)(PrivateRoute);
