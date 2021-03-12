import {actionType} from './action-types';

const initialState = {
  promo: {
    promoData: {},
    isPromoLoaded: false
  }
};

const promoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_PROMO:
      return {
        ...state,
        promo: {
          promoData: action.payload,
          isPromoLoaded: true
        }
      };

    default:
      return state;
  }
};

export {promoReducer};
