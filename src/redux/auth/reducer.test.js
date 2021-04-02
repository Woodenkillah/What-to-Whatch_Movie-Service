import {authReducer, initialState} from './reducer';
import {ActionCreator} from './actions';
import {mockStringValue, mockSimpleObj} from '../../test-mock';

describe(`authReducer works correctly`, () => {

  it(`Reducer should set authorization status with setAuth action creator`, () => {
    const expectedState = {
      ...initialState,
      authorizationStatus: mockStringValue
    };

    expect(authReducer(undefined, ActionCreator.setAuth(mockStringValue))).toEqual(expectedState);
  });

  it(`Reducer should set user data object with setUserData action creator`, () => {
    const expectedState = {
      ...initialState,
      user: mockSimpleObj
    };

    expect(authReducer(undefined, ActionCreator.setUserData(mockSimpleObj))).toEqual(expectedState);
  });

  it(`Reducer should set error type string with setErrorType action creator`, () => {
    const expectedState = {
      ...initialState,
      errorType: mockStringValue
    };

    expect(authReducer(undefined, ActionCreator.setErrorType(mockStringValue))).toEqual(expectedState);
  });

  it(`Reducer should return initial state in case of empty payload action`, () => {
    const expectedState = {
      ...initialState
    };

    expect(authReducer(undefined, {})).toEqual(expectedState);
  });

});
