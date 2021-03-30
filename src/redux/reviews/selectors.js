import get from 'lodash/get';

export const getReviewsListSelector = (state) => get(state, `reviews.reviewsList`, []);
