import {ActionCreator} from './actions';
import {LoadingStatuses, ApiRoutes} from '../../constants';

export const fetchFavoritesList = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setLoading(LoadingStatuses.LOADING));
  api.get(ApiRoutes.FAVORITES)
    .then(({data}) => {
      dispatch(ActionCreator.loadFavorites(data));
      dispatch(ActionCreator.setLoading(LoadingStatuses.LOADED));
    })
    .catch(() => {
      dispatch(ActionCreator.setLoading(LoadingStatuses.FAILED));
    });
};

export const setFavorite = (id, status) => (_dispatch, _getState, api) => {
  api.post(`${ApiRoutes.FAVORITES}/${id}/${status}`);
};
