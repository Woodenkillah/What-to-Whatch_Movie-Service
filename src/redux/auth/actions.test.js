import {ActionType} from './action-types';
import {ActionCreator} from './actions';
import {mockStringValue} from '../../test-mock';

describe(`Auth action creators work correctly`, () => {

  it(`Action creator returns correct action upon setting authorization status`, () => {
    const expectedAction = {
      type: ActionType.SET_AUTH,
      payload: mockStringValue
    };

    expect(ActionCreator.setAuth(mockStringValue)).toEqual(expectedAction);
  });

  it(`Action creator returns correct action upon setting user data to redux`, () => {
    const expectedAction = {
      type: ActionType.SET_USER_DATA,
      payload: mockStringValue
    };

    expect(ActionCreator.setUserData(mockStringValue)).toEqual(expectedAction);
  });

  it(`Action creator returns correct action upon setting error type to redux`, () => {
    const expectedAction = {
      type: ActionType.SET_ERROR_TYPE,
      payload: mockStringValue
    };

    expect(ActionCreator.setErrorType(mockStringValue)).toEqual(expectedAction);
  });
});
