import {DEFAULT_GENRE} from '../../constants';
import {actionType} from '../actions/actions';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  filmsData: [],
  isDataLoaded: false,
  promoData: {},
  isPromoLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload
      };

    case actionType.LOAD_FILMS:
      return {
        ...state,
        filmsData: action.payload,
        isDataLoaded: true
      };

    case actionType.LOAD_PROMO:
      return {
        ...state,
        promoData: action.payload,
        isPromoLoaded: true
      };

    default:
      return state;
  }
};

export {reducer};
