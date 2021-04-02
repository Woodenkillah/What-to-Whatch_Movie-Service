import {ActionCreator} from './actions';
import {ActionType} from './action-types';
import {mockSimpleObj} from '../../test-mock';

describe(`Target film action creators work correctly`, () => {
  it(`Action creator returns correct action upon setting loaded film object`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FILM,
      payload: mockSimpleObj
    };

    expect(ActionCreator.loadFilm(mockSimpleObj)).toEqual(expectedAction);
  });

});
