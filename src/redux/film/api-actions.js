import {ActionCreator} from './actions';
import {LoadingStatuses} from '../../constants';

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setLoading(LoadingStatuses.LOADING));
  api.get(`/films`)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilms(data));
      dispatch(ActionCreator.setLoading(LoadingStatuses.LOADED));
    })
    .catch(() => {
      dispatch(ActionCreator.setLoading(LoadingStatuses.FAILED));
    });
};
