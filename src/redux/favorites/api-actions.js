import {ActionCreator} from './actions';
import {dataToFilmsArrayAdapter, dataToSingleFilmAdapter} from '../../services/adapters';
import {ApiRoutes} from '../../constants';

export const fetchFavoritesList = () => (dispatch, _getState, api) => {
  return api.get(ApiRoutes.FAVORITES)
    .then(({data}) => {
      dispatch(ActionCreator.setIsLoading(true));
      dispatch(ActionCreator.loadFavorites(dataToFilmsArrayAdapter(data)));
    })
    .catch(() => {
      dispatch(ActionCreator.setIsLoadingError(true));
    })
    .finally(() => {
      dispatch(ActionCreator.setIsLoading(false));
    });
};

export const setFavorite = (id, status) => (dispatch, _getState, api) => {
  return api.post(`${ApiRoutes.FAVORITES}/${id}/${status}`)
    .then(({data}) => {
      if (status) {
        dispatch(ActionCreator.addFavorite(dataToSingleFilmAdapter(data)));
      } else {
        dispatch(ActionCreator.removeFavorite(dataToSingleFilmAdapter(data)));
      }
    })
    .catch(() => {});
};
