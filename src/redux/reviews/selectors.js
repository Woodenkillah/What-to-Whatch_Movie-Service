import get from 'lodash/get';

export const getReviewsListSelector = (state) => get(state, `reviews.reviewsList`, []);
export const getReviewsIsLoadingSelector = (state) => get(state, `reviews.isLoading`, false);
export const getReviewsIsLoadingErrorSelector = (state) => get(state, `reviews.isLoadingError`, [false]);
