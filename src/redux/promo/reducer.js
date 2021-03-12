import {actionType} from './action-types';
import {LoadingStatuses} from '../../constants';

const initialState = {
  promo: {
    promoData: {},
    promoLoadingStatus: LoadingStatuses.PENDING
  }
};

const promoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_PROMO:
      return {
        ...state,
        promo: {
          ...state.promo,
          promoData: action.payload
        }
      };

    case actionType.SET_LOADING:
      return {
        ...state,
        promo: {
          ...state.promo,
          isPromoLoaded: action.payload
        }
      };

    default:
      return state;
  }
};

export {promoReducer};
