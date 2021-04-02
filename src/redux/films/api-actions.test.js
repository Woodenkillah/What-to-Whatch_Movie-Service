import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../axios/axios';
import {fetchFilmsList} from './api-actions';
import {ActionType} from './action-types';
import {mockFilmsListData} from '../../test-mock';
import {ApiRoutes, LoadingStatuses} from '../../constants';

const api = createAPI(() => {});

describe(`Async api-actions work correctly`, () => {
  it(`Should make a correct API call to /films for receiving films objects array`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFilmsListAction = fetchFilmsList();

    apiMock
      .onGet(ApiRoutes.FILMS)
      .reply(200, mockFilmsListData.api);

    return fetchFilmsListAction(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: mockFilmsListData.adapted
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_LOADING,
          payload: LoadingStatuses.LOADED
        });
      });
  });

});
