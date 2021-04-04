import {ActionType} from './action-types';

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
  isLoading: false,
  isLoadingError: false
};

const promoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promoData: action.payload
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

export {promoReducer, initialState};
