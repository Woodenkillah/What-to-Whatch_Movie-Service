import React from 'react';
import {render} from '@testing-library/react';
import AddReviewForm from './add-review-form';

it(`Should render correctly`, () => {

  const {container} = render(
      <AddReviewForm
        onReviewRating={jest.fn()}
        onReviewComment={jest.fn()}
        onFormSubmit={jest.fn()}
        formState={{
          rating: 1,
          comment: ``,
          user: `Unknown author`
        }}
        reviewsErrorType={``}
      />
  );
  expect(container).toMatchSnapshot();
});
