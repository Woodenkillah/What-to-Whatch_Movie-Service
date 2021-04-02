import {ActionType} from './action-types';
import {ActionCreator} from './actions';
import {mockStringValue} from '../../test-mock';

describe(`Middlewares action creators work correctly`, () => {
  it(`Action creator returns correct action redirecting to estimated route`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: mockStringValue
    };

    expect(ActionCreator.redirectToRoute(mockStringValue)).toEqual(expectedAction);
  });
});
