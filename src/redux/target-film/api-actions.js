import {ActionCreator} from './actions';
import {LoadingStatuses, ApiRoutes} from '../../constants';

export const fetchFilm = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setLoading(LoadingStatuses.LOADING));
  api.get(`${ApiRoutes.FILMS}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilm(data));
      dispatch(ActionCreator.setLoading(LoadingStatuses.LOADED));
    })
    .catch(() => {
      dispatch(ActionCreator.setLoading(LoadingStatuses.FAILED));
    });
};
