import {ActionCreator} from './actions';

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)));
};

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  api.get(`/films/promo`)
    .then(({data}) => dispatch(ActionCreator.loadPromo(data)));
};
