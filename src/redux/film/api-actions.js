import {ActionCreator} from './actions';

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)));
};
