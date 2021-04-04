import {targetFilmReducer, initialState} from './reducer';
import {ActionCreator} from './actions';
import {mockSimpleObj, mockBoolean} from '../../test-mock';

describe(`reviewsReducer works correctly`, () => {

  it(`Reducer should set target film object with loadFilm action creator`, () => {
    const expectedState = {
      ...initialState,
      targetFilmData: mockSimpleObj
    };

    expect(targetFilmReducer(undefined, ActionCreator.loadFilm(mockSimpleObj))).toEqual(expectedState);
  });

  it(`Reducer should set loading status with setIsLoading action creator`, () => {
    const expectedState = {
      ...initialState,
      isLoading: mockBoolean
    };

    expect(targetFilmReducer(undefined, ActionCreator.setIsLoading(mockBoolean))).toEqual(expectedState);
  });

  it(`Reducer should return initial state in case of empty payload action`, () => {
    const expectedState = {
      ...initialState
    };

    expect(targetFilmReducer(undefined, {})).toEqual(expectedState);
  });
});
