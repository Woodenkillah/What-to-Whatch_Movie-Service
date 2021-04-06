import {ActionCreator} from './actions';
import {dataToSingleFilmAdapter} from '../../services/adapters';
import {ApiRoutes} from '../../constants';

export const fetchFilm = (id) => (dispatch, _getState, api) => {
  return api.get(`${ApiRoutes.FILMS}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilm(dataToSingleFilmAdapter(data)));
    })
    .catch(() => {
      dispatch(ActionCreator.setIsLoadingError(true));
    })
    .finally(() => {
      dispatch(ActionCreator.setIsLoading(false));
    });
};
