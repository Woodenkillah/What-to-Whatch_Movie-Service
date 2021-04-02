import {redirect} from './redirect';
import {ActionCreator} from './actions';
import {AppRoutes} from '../../constants';

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);
  return {store, next, invoke};
};

const fakeHistory = {
  location: {pathname: ``},
  push(path) {
    this.location.pathname = path;
  }
};

jest.mock(`../../browser-history`, () => fakeHistory);

describe(`Middleware works correctly`, () => {
  it(`Should pass to next middleware`, () => {
    const {invoke, next} = mockRedux();
    const action = ActionCreator.redirectToRoute(`/`);
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it(`Should correctly add route to fakeHistory`, () => {
    const {invoke} = mockRedux();
    const action = ActionCreator.redirectToRoute(AppRoutes.LOGIN);
    invoke(action);
    expect(fakeHistory.location.pathname).toBe(AppRoutes.LOGIN);
  });

  it(`Should not redirect due to incorrect url`, () => {
    const {invoke} = mockRedux();
    const incorrectUrl = `/incorrectUrl`;

    const incorrectAction = {type: ``, payload: incorrectUrl};

    invoke(incorrectAction);
    expect(fakeHistory.location.pathname).not.toBe(incorrectUrl);
  });
});
