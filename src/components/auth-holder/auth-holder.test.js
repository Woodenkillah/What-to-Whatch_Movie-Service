import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {mockInitialStoreData, mockFullStoreData} from '../../test-mock';
import AuthHolder from './auth-holder';
import SignInLink from '../sign-in-link/sign-in-link';
import UserAvatar from '../UI-components/user-avatar/user-avatar';

const mockStore = configureStore({});

describe(`Should render correct page both for authorized and non-authorized users`, () => {

  it(`Render 'UserAvatar' at for authorized user`, () => {
    const history = createMemoryHistory();
    const store = mockStore(mockFullStoreData);
    store.dispatch = () => {};

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <AuthHolder>
              <UserAvatar/>
            </AuthHolder>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  });

  it(`Render 'AddReview' at route '/films/:id/review' url for authorized user`, () => {
    const history = createMemoryHistory();
    const store = mockStore(mockInitialStoreData);
    store.dispatch = () => {};

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <SignInLink/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

});
