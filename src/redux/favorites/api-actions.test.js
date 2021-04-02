import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../axios/axios';
import {fetchFavoritesList} from './api-actions';
import {ActionType} from './action-types';
import {mockFilmsListData} from '../../test-mock';
import {ApiRoutes, LoadingStatuses} from '../../constants';

const api = createAPI(() => {});

describe(`Async api-actions work correctly`, () => {
  it(`Should make a correct API call to /favorites for receiving favorites list`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const setLoadingStatus = jest.fn(() => LoadingStatuses.LOADED);
    const fetchFavoritesAction = fetchFavoritesList(setLoadingStatus);

    apiMock
      .onGet(ApiRoutes.FAVORITES)
      .reply(200, mockFilmsListData.api);

    return fetchFavoritesAction(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: mockFilmsListData.adapted
        });
        expect(setLoadingStatus).toHaveBeenCalledTimes(1);
      });
  });

});
