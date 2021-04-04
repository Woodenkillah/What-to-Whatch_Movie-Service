import {ActionType} from './action-types';
import {ActionCreator} from './actions';
import {mockSimpleObj, mockBoolean} from '../../test-mock';

describe(`Promo action creators work correctly`, () => {
  it(`Action creator returns correct action upon setting loaded promo film object`, () => {
    const expectedAction = {
      type: ActionType.LOAD_PROMO,
      payload: mockSimpleObj
    };

    expect(ActionCreator.loadPromo(mockSimpleObj)).toEqual(expectedAction);
  });

  it(`Action creator returns correct action upon setting loading status`, () => {
    const expectedAction = {
      type: ActionType.SET_IS_LOADING,
      payload: mockBoolean
    };

    expect(ActionCreator.setIsLoading(mockBoolean)).toEqual(expectedAction);
  });

});
