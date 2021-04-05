import {favoritesReducer, initialState} from './reducer';
import {ActionCreator} from './actions';
import {mockSimpleObjsArr, mockBoolean} from '../../test-mock';

describe(`favoritesReducer works correctly`, () => {
  it(`Reducer should set user objects array with loadFavorites action creator`, () => {
    const expectedState = {
      ...initialState,
      favoritesData: mockSimpleObjsArr
    };

    expect(favoritesReducer(undefined, ActionCreator.loadFavorites(mockSimpleObjsArr))).toEqual(expectedState);
  });

  it(`Reducer should set loading status with setIsLoading action creator`, () => {
    const expectedState = {
      ...initialState,
      isLoading: mockBoolean
    };

    expect(favoritesReducer(undefined, ActionCreator.setIsLoading(mockBoolean))).toEqual(expectedState);
  });

  it(`Reducer should set loading status with setIsLoadingError action creator`, () => {
    const expectedState = {
      ...initialState,
      isLoadingError: false
    };

    expect(favoritesReducer(undefined, ActionCreator.setIsLoadingError(false))).toEqual(expectedState);
  });

  it(`Reducer should return initial state in case of empty payload action`, () => {
    const expectedState = {
      ...initialState
    };

    expect(favoritesReducer(undefined, {})).toEqual(expectedState);
  });

});
