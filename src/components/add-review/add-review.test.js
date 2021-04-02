import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {mockInitialStoreData, mockFullStoreData} from '../../test-mock';
import AddReview from './add-review';
import Page404 from '../404-page/404-page';
import {AppRoutes} from '../../constants';

const mockStore = configureStore({});

describe(`Should render correct page both for authorized and non-authorized users`, () => {

  it(`Render 'AddReview' at route '/films/:id/review' url for authorized user`, () => {
    const history = createMemoryHistory();
    const store = mockStore(mockFullStoreData);
    store.dispatch = () => {};
    history.push(`${AppRoutes.FILMS}/1/review`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <AddReview/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });

  it(`Render 'AddReview' at route '/films/:id/review' url for authorized user`, () => {
    const history = createMemoryHistory();
    const store = mockStore(mockInitialStoreData);
    store.dispatch = () => {};
    history.push(`${AppRoutes.FILMS}/1/review`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Page404/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/404 - Page is not found!/i)).toBeInTheDocument();
  });

});
