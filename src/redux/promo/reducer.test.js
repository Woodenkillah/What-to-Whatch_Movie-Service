import {promoReducer, initialState} from './reducer';
import {ActionCreator} from './actions';
import {mockStringValue, mockSimpleObj} from '../../test-mock';

describe(`promoReducer works correctly`, () => {

  it(`Reducer should set promo film object array with loadPromo action creator`, () => {
    const expectedState = {
      ...initialState,
      promoData: mockSimpleObj
    };

    expect(promoReducer(undefined, ActionCreator.loadPromo(mockSimpleObj))).toEqual(expectedState);
  });

  it(`Reducer should set films loading status string value with setLoading action creator`, () => {
    const expectedState = {
      ...initialState,
      promoLoadingStatus: mockStringValue
    };

    expect(promoReducer(undefined, ActionCreator.setLoading(mockStringValue))).toEqual(expectedState);
  });

  it(`Reducer should return initial state in case of empty payload action`, () => {
    const expectedState = {
      ...initialState
    };

    expect(promoReducer(undefined, {})).toEqual(expectedState);
  });
});
