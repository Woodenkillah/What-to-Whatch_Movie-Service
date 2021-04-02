import {ActionType} from './action-types';
import {ActionCreator} from './actions';
import {mockSimpleObjsArr} from '../../test-mock';

describe(`Favorites action creators work correctly`, () => {
  it(`Action creator returns correct action upon setting favorite films list`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: mockSimpleObjsArr
    };

    expect(ActionCreator.loadFavorites(mockSimpleObjsArr)).toEqual(expectedAction);
  });
});
