import {DEFAULT_GENRE} from '../constants';
import {actionType} from './actions';

const initialState = {
  activeGenre: DEFAULT_GENRE
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload
      };

    default:
      return state;
  }
};

export {reducer};
