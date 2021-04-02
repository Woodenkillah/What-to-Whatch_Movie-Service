import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Film from './film';
import {mockSingleFilmData, mockFilmsListData, mockInitialStoreData} from '../../test-mock';
import {AuthStatuses} from '../../constants';

const mockStore = configureStore({});

it(`Should render correectly`, () => {

  const history = createMemoryHistory();
  const store = mockStore(mockInitialStoreData);
  store.dispatch = () => {};
  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Film
            filmsData={mockFilmsListData.adapted}
            targetFilmData={mockSingleFilmData.adapted}
            onSetFavorite={jest.fn()}
            authorizationStatus={AuthStatuses.AUTH}
            onFetchFilm={jest.fn()}
          />
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
