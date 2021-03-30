import {ActionType} from './action-types.js';

const initialState = {
  favoritesData: []
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favoritesData: action.payload,
      };

    default:
      return state;
  }
};

export {favoritesReducer};
