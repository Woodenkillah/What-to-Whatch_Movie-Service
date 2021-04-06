import {ActionCreator} from './actions';
import {dataToSingleFilmAdapter} from '../../services/adapters';
import {ApiRoutes} from '../../constants';

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  return api.get(`${ApiRoutes.PROMO}`)
    .then(({data}) => {
      dispatch(ActionCreator.setIsLoading(true));
      dispatch(ActionCreator.loadPromo(dataToSingleFilmAdapter(data)));
    })
    .catch(() => {
      dispatch(ActionCreator.setIsLoadingError(true));
    })
    .finally(() => {
      dispatch(ActionCreator.setIsLoading(false));
    });
};
