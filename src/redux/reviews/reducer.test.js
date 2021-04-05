import {reviewsReducer, initialState} from './reducer';
import {ActionCreator} from './actions';
import {mockSimpleObjsArr, mockBoolean} from '../../test-mock';

describe(`reviewsReducer works correctly`, () => {

  it(`Reducer should set reviews object array with loadReviews action creator`, () => {
    const expectedState = {
      ...initialState,
      reviewsList: mockSimpleObjsArr
    };

    expect(reviewsReducer(undefined, ActionCreator.loadReviews(mockSimpleObjsArr))).toEqual(expectedState);
  });

  it(`Reducer should set loading status with setIsLoading action creator`, () => {
    const expectedState = {
      ...initialState,
      isLoading: mockBoolean
    };

    expect(reviewsReducer(undefined, ActionCreator.setIsLoading(mockBoolean))).toEqual(expectedState);
  });

  it(`Reducer should set loading status with setIsLoadingError action creator`, () => {
    const expectedState = {
      ...initialState,
      isLoadingError: mockBoolean
    };

    expect(reviewsReducer(undefined, ActionCreator.setIsLoadingError(mockBoolean))).toEqual(expectedState);
  });

  it(`Reducer should return initial state in case of empty payload action`, () => {
    const expectedState = {
      ...initialState
    };

    expect(reviewsReducer(undefined, {})).toEqual(expectedState);
  });
});
