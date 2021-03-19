import {ActionCreator} from './actions';
import {LoadingStatuses, ApiRoutes} from '../../constants';

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setLoading(LoadingStatuses.LOADING));
  api.get(ApiRoutes.PROMO)
    .then(({data}) => {
      dispatch(ActionCreator.loadPromo(data));
      dispatch(ActionCreator.setLoading(LoadingStatuses.LOADED));
    })
    .catch(() => {
      dispatch(ActionCreator.setLoading(LoadingStatuses.FAILED));
    });
};
