import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Main from './main';
import {mockFilmsListData, mockInitialStoreData, mockSingleFilmData, mockBoolean} from '../../test-mock';

const mockStore = configureStore({});

it(`Should render correctly`, () => {

  const history = createMemoryHistory();
  const store = mockStore(mockInitialStoreData);
  store.dispatch = () => {};
  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Main
            filmsData={mockFilmsListData.adapted}
            promoData={mockSingleFilmData.adapted}
            filmIsLoading={mockBoolean}
            promoIsLoading={mockBoolean}
            filteredFilms={mockFilmsListData.adapted}
            filmsIsLoadingError={mockBoolean}
            promoIsLoadingError={mockBoolean}
          />
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
