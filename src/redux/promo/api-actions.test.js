import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {fetchPromoFilm} from './api-actions';
import {ActionType} from './action-types';
import {mockSingleFilmData} from '../../test-mock';
import {ApiRoutes} from '../../constants';

const api = createAPI(() => {});

describe(`Async api-actions work correctly`, () => {
  it(`Should make a correct API call to /films/promo for receiving promo film data object`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchPromoFilmAction = fetchPromoFilm();

    apiMock
      .onGet(ApiRoutes.PROMO)
      .reply(200, mockSingleFilmData.api);

    return fetchPromoFilmAction(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_IS_LOADING,
          payload: true
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_PROMO,
          payload: mockSingleFilmData.adapted
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_IS_LOADING,
          payload: false
        });
      });
  });

});
