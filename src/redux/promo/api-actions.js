import {ActionCreator} from './actions';

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  api.get(`/films/promo`)
    .then(({data}) => dispatch(ActionCreator.loadPromo(data)));
};
