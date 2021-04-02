import {ActionCreator} from './actions';
import {dataToSingleFilmAdapter} from '../../adapters';
import {LoadingStatuses, ApiRoutes} from '../../constants';

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  return api.get(ApiRoutes.PROMO)
    .then(({data}) => {
      dispatch(ActionCreator.loadPromo(dataToSingleFilmAdapter(data)));
      dispatch(ActionCreator.setLoading(LoadingStatuses.LOADED));
    })
    .catch(() => {
      dispatch(ActionCreator.setLoading(LoadingStatuses.FAILED));
    });
};
