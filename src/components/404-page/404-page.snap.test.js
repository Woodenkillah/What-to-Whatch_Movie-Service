import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Page404 from './404-page';

it(`Should render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <Page404/>
      </Router>
  );
  expect(container).toMatchSnapshot();
});
