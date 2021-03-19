import {ActionType} from './action-types';
import {AuthStatuses} from '../../constants';

const initialState = {
  authorizationStatus: AuthStatuses.NO_AUTH,
  user: {
    email: null,
    avatar: null
  },
  errorType: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH:
      return {
        ...state,
        authorizationStatus: action.payload
      };

    case ActionType.SET_USER_DATA:
      return {
        ...state,
        user: action.payload
      };

    case ActionType.SET_ERROR_TYPE:
      return {
        ...state,
        errorType: action.payload
      };

    default:
      return state;
  }
};

export {authReducer};
