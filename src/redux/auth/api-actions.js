import {ActionCreator} from './actions';
import {ActionCreator as MiddlewaresActionCreator} from '../middlewares/actions';
import {AuthStatuses} from '../../constants';
import {dataToUserInfoAdapter} from './adapters';
import {AppRoutes, ApiRoutes, HttpStatusCodes, ErrorTypes} from '../../constants';

export const login = (userData) => (dispatch, _getState, api) => {
  api.post(ApiRoutes.LOGIN, userData)
    .then(({data}) => {
      dispatch(ActionCreator.setAuth(AuthStatuses.AUTH));
      dispatch(ActionCreator.setUserData(dataToUserInfoAdapter(data)));
      dispatch(MiddlewaresActionCreator.redirectToRoute(AppRoutes.ROOT));
    })
    .catch(({response}) => {
      if (response.status === HttpStatusCodes.UNAUTHORIZED) {
        dispatch(ActionCreator.setErrorType(ErrorTypes.UNAUTHORIZED));
      } else if (response.status === HttpStatusCodes.BAD_REQUEST) {
        dispatch(ActionCreator.setErrorType(ErrorTypes.BAD_REQUEST));
      }
    });
};

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(ApiRoutes.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.setAuth(AuthStatuses.AUTH));
      dispatch(ActionCreator.setUserData(dataToUserInfoAdapter(data)));
    })
    .catch(() => {});
};

export const logout = () => (dispatch, _getState, api) => {
  api.get(ApiRoutes.LOGOUT)
  .then(() => {
    dispatch(ActionCreator.setAuth(AuthStatuses.NO_AUTH));
    dispatch(ActionCreator.setUserData({email: null, avatar: null}));
    dispatch(MiddlewaresActionCreator.redirectToRoute(AppRoutes.ROOT));
    dispatch(ActionCreator.setErrorType(null));
  })
  .catch(() => {});
};