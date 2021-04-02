import {ActionCreator} from './actions';
import {ActionType} from './action-types';
import {mockSimpleObjsArr} from '../../test-mock';

describe(`Reviews action creators work correctly`, () => {
  it(`Action creator returns correct action upon setting loaded reviews object array`, () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: mockSimpleObjsArr
    };

    expect(ActionCreator.loadReviews(mockSimpleObjsArr)).toEqual(expectedAction);
  });

});
