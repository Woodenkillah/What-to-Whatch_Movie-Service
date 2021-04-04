import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {fetchFilm} from './api-actions';
import {ActionType} from './action-types';
import {mockNumValue, mockSingleFilmData} from '../../test-mock';
import {ApiRoutes, LoadingStatuses} from '../../constants';

const api = createAPI(() => {});

describe(`Async api-actions work correctly`, () => {
  it(`Should make a correct API call to /comments for receiving film reviews`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const setLoadingStatus = jest.fn(() => LoadingStatuses.LOADED);
    const fetchFilmAction = fetchFilm(mockNumValue, setLoadingStatus);

    apiMock
      .onGet(`${ApiRoutes.FILMS}/${mockNumValue}`)
      .reply(200, mockSingleFilmData.api);

    return fetchFilmAction(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_IS_LOADING,
          payload: true
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_FILM,
          payload: mockSingleFilmData.adapted
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_IS_LOADING,
          payload: false
        });
      });

  });
});
