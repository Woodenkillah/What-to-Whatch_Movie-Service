import {ActionCreator} from './actions';
import {dataToFilmsArrayAdapter} from '../../services/adapters';
import {ApiRoutes} from '../../constants';

export const fetchFavoritesList = () => (dispatch, _getState, api) => {
  return api.get(ApiRoutes.FAVORITES)
    .then(({data}) => {
      dispatch(ActionCreator.setIsLoading(true));
      dispatch(ActionCreator.loadFavorites(dataToFilmsArrayAdapter(data)));
      dispatch(ActionCreator.setIsLoading(false));
    })
    .catch(() => {
      dispatch(ActionCreator.setIsLoading(false));
      dispatch(ActionCreator.setIsLoadingError(true));
    });
};

export const setFavorite = (id, status) => (_dispatch, _getState, api) => {
  return api.post(`${ApiRoutes.FAVORITES}/${id}/${status}`);
};
