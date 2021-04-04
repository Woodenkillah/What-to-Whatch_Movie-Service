import {ActionType} from './action-types';
import {ActionCreator} from './actions';
import {mockSimpleObjsArr, mockBoolean} from '../../test-mock';

describe(`Favorites action creators work correctly`, () => {
  it(`Action creator returns correct action upon setting favorite films list`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: mockSimpleObjsArr
    };

    expect(ActionCreator.loadFavorites(mockSimpleObjsArr)).toEqual(expectedAction);
  });

  it(`Action creator returns correct action upon setting favorite films list loading status`, () => {
    const expectedAction = {
      type: ActionType.SET_IS_LOADING,
      payload: mockBoolean
    };

    expect(ActionCreator.setIsLoading(mockBoolean)).toEqual(expectedAction);
  });
});
