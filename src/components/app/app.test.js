import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {mockInitialStoreData, mockFullStoreData} from '../../test-mock';
import App from './app';
import {AppRoutes} from '../../constants';

const mockStore = configureStore({});

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'Main' when user navigate to '/' url`, () => {
    const history = createMemoryHistory();
    const store = mockStore(mockInitialStoreData);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/2021 What to watch Ltd/i)).toBeInTheDocument();
  });

  it(`Render 'SignIn' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    history.push(AppRoutes.LOGIN);
    const store = mockStore(mockInitialStoreData);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByLabelText(`Email address`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Password`)).toBeInTheDocument();
  });

  it(`Render 'MyList' when user navigate to '/mylist' url`, () => {
    const history = createMemoryHistory();
    const store = mockStore(mockFullStoreData);
    store.dispatch = () => {};
    history.push(AppRoutes.MY_LIST);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it(`Render 'Film' when user navigate to '/films/:id' url`, () => {
    const store = mockStore(mockFullStoreData);

    const history = createMemoryHistory();
    history.push(`${AppRoutes.FILMS}/1`);
    store.dispatch = () => {};
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it(`Render 'AddReview' when user navigate to '/films/:id/review' url`, () => {
    const history = createMemoryHistory();
    const store = mockStore(mockFullStoreData);
    store.dispatch = () => {};
    history.push(`${AppRoutes.FILMS}/1/review`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });

  it(`Render 'Page404' when user navigate to non-existent route`, () => {
    const history = createMemoryHistory();
    history.push(`/non-existent-route`);
    const store = mockStore(mockFullStoreData);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`404 - Page is not found!`)).toBeInTheDocument();
  });

});

