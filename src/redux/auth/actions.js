import {ActionType} from './action-types';

export const ActionCreator = {
  setAuth: (authStatus) => ({
    type: ActionType.SET_AUTH,
    payload: authStatus
  }),

  setUserData: (userData) => ({
    type: ActionType.SET_USER_DATA,
    payload: userData
  }),

  setErrorType: (errorType) => ({
    type: ActionType.SET_ERROR_TYPE,
    payload: errorType
  })
};
