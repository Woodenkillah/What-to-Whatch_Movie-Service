import {ActionType} from './action-types';

const initialState = {
  reviewsList: [],
  errorType: ``
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviewsList: action.payload
      };

    default:
      return state;
  }
};

export {reviewsReducer};
