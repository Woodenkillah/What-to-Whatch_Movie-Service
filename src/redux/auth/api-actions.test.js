import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {login, checkAuth, logout} from './api-actions';
import {ActionType} from './action-types';
import {ActionType as MiddlewareActionType} from '../middlewares/action-types';
import {ActionType as FavoritesActonType} from '../favorites/action-types';
import {mockUserData, mockLoginUserData, mockLogoutUserData} from '../../test-mock';
import {ApiRoutes, AppRoutes, AuthStatuses} from '../../constants';

const api = createAPI(() => {});

describe(`Async api-actions work correctly`, () => {
  it(`Should make a correct API call to /login for login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginAction = login(mockUserData);

    apiMock
      .onPost(ApiRoutes.LOGIN)
      .reply(200, mockLoginUserData.api);

    return loginAction(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(5);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTH,
          payload: AuthStatuses.AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_DATA,
          payload: mockLoginUserData.adapted
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: MiddlewareActionType.REDIRECT_TO_ROUTE,
          payload: AppRoutes.ROOT
        });
        expect(dispatch).toHaveBeenNthCalledWith(5, {
          type: ActionType.SET_ERROR_TYPE,
          payload: ``
        });
      });
  });

  it(`Should make a correct API call to /login for login status verification`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthAction = checkAuth();

    apiMock
      .onGet(ApiRoutes.LOGIN)
      .reply(200, mockLoginUserData.api);

    return checkAuthAction(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTH,
          payload: AuthStatuses.AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_DATA,
          payload: mockLoginUserData.adapted
        });
      });
  });

  it(`Should make a correct API call to /logout for logout`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutAction = logout();

    apiMock
      .onGet(ApiRoutes.LOGOUT)
      .reply(200);

    return logoutAction(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTH,
          payload: AuthStatuses.NO_AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_DATA,
          payload: mockLogoutUserData
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: FavoritesActonType.CLEAR_FAVORITES,
          payload: []
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: MiddlewareActionType.REDIRECT_TO_ROUTE,
          payload: AppRoutes.ROOT
        });
      });
  });
});
