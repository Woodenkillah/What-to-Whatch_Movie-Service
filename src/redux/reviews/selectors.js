import {LoadingStatuses} from '../../constants.js';
import get from 'lodash/get';

export const getReviewsListSelector = (state) => get(state, `reviews.reviews.reviewsList`, []);
export const getReviewsLoadingStatusSelector = (state) => get(state, `reviews.reviews.reviewsLoadingStatus`, LoadingStatuses.PENDING);
export const getReviewsErrorTypeSelector = (state) => get(state, `reviews.errorType`, ``);
