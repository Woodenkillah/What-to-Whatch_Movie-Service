import {ActionCreator} from './actions';
import {ActionCreator as MiddlewaresActionCreator} from '../middlewares/actions';
import {AuthStatuses} from '../../constants';
import {dataToUserInfoAdapter} from '../../adapters';
import {AppRoutes, ApiRoutes, HttpStatusCodes, AuthErrorTypes} from '../../constants';

export const login = (userData) => (dispatch, _getState, api) => {
  return api.post(ApiRoutes.LOGIN, userData)
    .then(({data}) => {
      dispatch(ActionCreator.setAuth(AuthStatuses.AUTH));
      dispatch(ActionCreator.setUserData(dataToUserInfoAdapter(data)));
      dispatch(MiddlewaresActionCreator.redirectToRoute(AppRoutes.ROOT));
      dispatch(ActionCreator.setErrorType(``));
    })
    .catch(({response}) => {
      if (response.status === HttpStatusCodes.UNAUTHORIZED) {
        dispatch(ActionCreator.setErrorType(AuthErrorTypes.UNAUTHORIZED));
      } else if (response.status === HttpStatusCodes.BAD_REQUEST) {
        dispatch(ActionCreator.setErrorType(AuthErrorTypes.BAD_REQUEST));
      }
    });
};

export const checkAuth = () => (dispatch, _getState, api) => {
  return api.get(ApiRoutes.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.setAuth(AuthStatuses.AUTH));
      dispatch(ActionCreator.setUserData(dataToUserInfoAdapter(data)));
    })
    .catch(() => {});
};

export const logout = () => (dispatch, _getState, api) => {
  return api.get(ApiRoutes.LOGOUT)
  .then(() => {
    dispatch(ActionCreator.setAuth(AuthStatuses.NO_AUTH));
    dispatch(ActionCreator.setUserData({email: ``, avatar: ``}));
    dispatch(MiddlewaresActionCreator.redirectToRoute(AppRoutes.ROOT));
  })
  .catch(() => {});
};
