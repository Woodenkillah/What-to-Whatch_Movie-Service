import {ActionType} from './action-types';
import {LoadingStatuses} from '../../constants';

const initialState = {
  reviews: {
    reviewsList: [],
    reviewsLoadingStatus: LoadingStatuses.PENDING
  },
  errorType: null
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          reviewsList: action.payload
        }
      };

    case ActionType.SET_LOADING:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          reviewsLoadingStatus: action.payload,
        }
      };

    case ActionType.SET_ERROR_TYPE:
      return {
        ...state,
        errorType: action.payload
      };

    default:
      return state;
  }
};

export {reviewsReducer};
