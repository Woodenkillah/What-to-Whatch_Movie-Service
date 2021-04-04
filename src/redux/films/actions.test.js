import {ActionType} from './action-types';
import {ActionCreator} from './actions';
import {mockStringValue, mockBoolean, mockSimpleObjsArr} from '../../test-mock';

describe(`Films action creators work correctly`, () => {

  it(`Action creator returns correct action upon changing choosen films genre`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: mockStringValue
    };

    expect(ActionCreator.handleChangeGenre(mockStringValue)).toEqual(expectedAction);
  });

  it(`Action creator returns correct action upon setting loaded films array`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: mockSimpleObjsArr
    };

    expect(ActionCreator.loadFilms(mockSimpleObjsArr)).toEqual(expectedAction);
  });

  it(`Action creator returns correct action upon setting loading status`, () => {
    const expectedAction = {
      type: ActionType.SET_IS_LOADING,
      payload: mockBoolean
    };

    expect(ActionCreator.setIsLoading(mockBoolean)).toEqual(expectedAction);
  });

});
