import {ActionCreator} from './actions';
import {dataToSingleFilmAdapter} from '../../adapters';
import {LoadingStatuses, ApiRoutes} from '../../constants';

export const fetchFilm = (id, setLoadingStatus) => (dispatch, _getState, api) => {
  return api.get(`${ApiRoutes.FILMS}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilm(dataToSingleFilmAdapter(data)));
      setLoadingStatus(LoadingStatuses.LOADED);
    })
    .catch(() => {
      setLoadingStatus(LoadingStatuses.FAILED);
    });
};
