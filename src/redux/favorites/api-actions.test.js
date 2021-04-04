import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {fetchFavoritesList} from './api-actions';
import {ActionType} from './action-types';
import {mockFilmsListData} from '../../test-mock';
import {ApiRoutes} from '../../constants';

const api = createAPI(() => {});

describe(`Async api-actions work correctly`, () => {
  it(`Should make a correct API call to /favorites for receiving favorites list`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavoritesAction = fetchFavoritesList();

    apiMock
      .onGet(ApiRoutes.FAVORITES)
      .reply(200, mockFilmsListData.api);

    return fetchFavoritesAction(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_IS_LOADING,
          payload: true
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_FAVORITES,
          payload: mockFilmsListData.adapted
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_IS_LOADING,
          payload: false
        });
      });
  });

});
