import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import FilmReviews from './film-reviews';
import {mockNumValue, mockInitialStoreData, mockFilmReviewsData} from '../../test-mock';

const mockStore = configureStore({});

it(`Should render correctly`, () => {

  const history = createMemoryHistory();
  const store = mockStore(mockInitialStoreData);
  store.dispatch = () => {};
  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <FilmReviews
            targetFilmId={mockNumValue}
            onLoadReviews={jest.fn()}
            reviewsList={mockFilmReviewsData.adapted}
          />
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
