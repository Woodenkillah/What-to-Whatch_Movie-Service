import {favoritesReducer, initialState} from './reducer';
import {ActionCreator} from './actions';
import {mockSimpleObjsArr} from '../../test-mock';

describe(`favoritesReducer works correctly`, () => {
  it(`Reducer should set user objects array with loadFavorites action creator`, () => {
    const expectedState = {
      ...initialState,
      favoritesData: mockSimpleObjsArr
    };

    expect(favoritesReducer(undefined, ActionCreator.loadFavorites(mockSimpleObjsArr))).toEqual(expectedState);
  });

  it(`Reducer should return initial state in case of empty payload action`, () => {
    const expectedState = {
      ...initialState
    };

    expect(favoritesReducer(undefined, {})).toEqual(expectedState);
  });

});
