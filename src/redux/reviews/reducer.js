import {ActionType} from './action-types';

const initialState = {
  reviewsList: [],
  isLoading: false,
  isLoadingError: false
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviewsList: action.payload
      };

    case ActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    case ActionType.SET_IS_LOADING_ERROR:
      return {
        ...state,
        isLoadingError: action.payload,
      };

    default:
      return state;
  }
};

export {reviewsReducer, initialState};
