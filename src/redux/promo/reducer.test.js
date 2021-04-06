import {promoReducer, initialState} from './reducer';
import {ActionCreator} from './actions';
import {mockSimpleObj, mockBoolean} from '../../test-mock';

describe(`promoReducer works correctly`, () => {

  it(`Reducer should set promo film object array with loadPromo action creator`, () => {
    const expectedState = {
      ...initialState,
      promoData: mockSimpleObj
    };

    expect(promoReducer(undefined, ActionCreator.loadPromo(mockSimpleObj))).toEqual(expectedState);
  });

  it(`Reducer should set loading status with setIsLoading action creator`, () => {
    const expectedState = {
      ...initialState,
      isLoading: mockBoolean
    };

    expect(promoReducer(undefined, ActionCreator.setIsLoading(mockBoolean))).toEqual(expectedState);
  });

  it(`Reducer should return initial state in case of empty payload action`, () => {
    const expectedState = {
      ...initialState
    };

    expect(promoReducer(undefined, {})).toEqual(expectedState);
  });
});
