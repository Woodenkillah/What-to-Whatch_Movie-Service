import {ActionCreator} from './actions';
import {dataToFilmsArrayAdapter} from '../../adapters';
import {LoadingStatuses, ApiRoutes} from '../../constants';

export const fetchFavoritesList = (setLoadingStatus) => (dispatch, _getState, api) => {
  api.get(ApiRoutes.FAVORITES)
    .then(({data}) => {
      dispatch(ActionCreator.loadFavorites(dataToFilmsArrayAdapter(data)));
      setLoadingStatus(LoadingStatuses.LOADED);
    })
    .catch(() => {
      setLoadingStatus(LoadingStatuses.FAILED);
    });
};

export const setFavorite = (id, status) => (_dispatch, _getState, api) => {
  api.post(`${ApiRoutes.FAVORITES}/${id}/${status}`);
};
