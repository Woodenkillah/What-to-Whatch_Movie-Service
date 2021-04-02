import React from 'react';
import {render} from '@testing-library/react';
import CardContent from './card-content';
import VideoElement from '../video-element/video-element';
import {Link} from 'react-router-dom';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {mockNumValue, mockStringValue, mockStringSrc} from '../../test-mock';

describe(`Should render correct content depending on place of render`, () => {

  it(`Render 'UserAvatar' at for authorized user`, () => {
    const history = createMemoryHistory();
    const {container} = render(
        <Router history={history}>
          <CardContent
            id={mockNumValue}
            name={mockStringValue}
            posterImage={mockStringSrc}
            src={mockStringSrc}
            isHovered={true}
            activeFilmId={mockNumValue}
          >
            <VideoElement
              src={mockStringSrc}
              poster={mockStringSrc}
              isPreview={true}
            />);
          </CardContent>
        </Router>
    );

    expect(container).toMatchSnapshot();
  });

  it(`Render 'AddReview' at route '/films/:id/review' url for authorized user`, () => {
    const history = createMemoryHistory();
    const {container} = render(
        <Router history={history}>
          <CardContent
            id={mockNumValue}
            name={mockStringValue}
            posterImage={mockStringSrc}
            src={mockStringSrc}
            isHovered={false}
            activeFilmId={mockNumValue}
          >
            <React.Fragment>
              <div className="small-movie-card__image">
                <img src={mockStringSrc} alt={mockStringValue} width="280" height="175"/>
              </div>
              <h3 className="small-movie-card__title">
                <Link className="small-movie-card__link" to={`#`}>{mockStringValue}</Link>
              </h3>
            </React.Fragment>

          </CardContent>
        </Router>
    );

    expect(container).toMatchSnapshot();
  });

});
