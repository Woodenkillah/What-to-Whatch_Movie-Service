import {ActionType} from './action-types';
import {LoadingStatuses} from '../../constants';

const initialState = {
  promoData: {
    id: 0,
    name: ``,
    posterImage: ``,
    previewImage: ``,
    backgroundImage: ``,
    backgroundColor: ``,
    videoLink: ``,
    previewVideoLink: ``,
    description: ``,
    rating: 0,
    scoresCount: 0,
    director: ``,
    starring: [],
    runTime: 0,
    genre: ``,
    released: 0,
    isFavorite: false
  },
  promoLoadingStatus: LoadingStatuses.LOADING
};

const promoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promoData: action.payload
      };

    case ActionType.SET_LOADING:
      return {
        ...state,
        promoLoadingStatus: action.payload
      };

    default:
      return state;
  }
};

export {promoReducer, initialState};
