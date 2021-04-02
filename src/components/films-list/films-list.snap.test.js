import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {mockFilmsListData} from '../../test-mock';
import FilmsList from './films-list';

describe(`Should render correctly depending on availability of listed items`, () => {

  it(`Render 'FilmsLit' with films items`, () => {
    const history = createMemoryHistory();
    const {container} = render(
        <Router history={history}>
          <FilmsList
            filmsListData={mockFilmsListData.adapted}
          />
        </Router>
    );

    expect(container).toMatchSnapshot();
  });

  it(`Render 'FilmsLit' without films items`, () => {
    const history = createMemoryHistory();
    const {container} = render(
        <Router history={history}>
          <FilmsList
            filmsListData={[]}
          />
        </Router>
    );

    expect(container).toMatchSnapshot();
  });

});
