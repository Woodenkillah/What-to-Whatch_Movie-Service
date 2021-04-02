import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import PromoPoster from './promo-poster';
import {mockFullStoreData, mockStringValue, mockStringSrc} from '../../test-mock';

const mockStore = configureStore({});

it(`Should render correctly`, () => {

  const history = createMemoryHistory();
  const store = mockStore(mockFullStoreData);
  store.dispatch = () => {};
  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <PromoPoster
            name={mockStringValue}
            posterImage={mockStringSrc}
          />
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
