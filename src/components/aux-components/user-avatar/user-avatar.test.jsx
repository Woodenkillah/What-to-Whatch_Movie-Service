import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import UserAvatar from './user-avatar';
import {mockFullStoreData, mockStringValue} from '../../../test-mock';

const mockStore = configureStore({});

it(`Should render correctly`, () => {

  const history = createMemoryHistory();
  const store = mockStore(mockFullStoreData);
  store.dispatch = () => {};
  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <UserAvatar
            onLogout={jest.fn()}
            userEmail={mockStringValue}
            userAvatar={mockStringValue}
          />
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
