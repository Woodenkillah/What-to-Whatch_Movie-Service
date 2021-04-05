import {ActionCreator} from './actions';
import {dataToSingleFilmAdapter} from '../../services/adapters';
import {ApiRoutes} from '../../constants';

export const fetchFilm = (id) => (dispatch, _getState, api) => {
  return api.get(`${ApiRoutes.FILMS}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.setIsLoading(true));
      dispatch(ActionCreator.loadFilm(dataToSingleFilmAdapter(data)));
      dispatch(ActionCreator.setIsLoading(false));
    })
    .catch(() => {
      dispatch(ActionCreator.setIsLoading(false));
      dispatch(ActionCreator.setIsLoadingError(true));
    });
};
