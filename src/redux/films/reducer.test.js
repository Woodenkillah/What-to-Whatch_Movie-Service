import {ActionCreator} from './actions';
import {filmsReducer, initialState} from './reducer';
import {mockStringValue, mockSimpleObjsArr, mockBoolean} from '../../test-mock';

describe(`filmsReducer works correctly`, () => {
  it(`Reducer should set genre string value with handleChangeGenre action creator`, () => {
    const expectedState = {
      ...initialState,
      activeGenre: mockStringValue
    };

    expect(filmsReducer(undefined, ActionCreator.handleChangeGenre(mockStringValue))).toEqual(expectedState);
  });

  it(`Reducer should set films objects array with loadFilms action creator`, () => {
    const expectedState = {
      ...initialState,
      filmsData: mockSimpleObjsArr
    };

    expect(filmsReducer(undefined, ActionCreator.loadFilms(mockSimpleObjsArr))).toEqual(expectedState);
  });

  it(`Reducer should set loading status with setIsLoading action creator`, () => {
    const expectedState = {
      ...initialState,
      isLoading: mockBoolean
    };

    expect(filmsReducer(undefined, ActionCreator.setIsLoading(mockBoolean))).toEqual(expectedState);
  });

  it(`Reducer should return initial state in case of empty payload action`, () => {
    const expectedState = {
      ...initialState
    };

    expect(filmsReducer(undefined, {})).toEqual(expectedState);
  });
});

