import {ActionCreator} from './actions';
import {dataToFilmsArrayAdapter} from '../../services/adapters';
import {ApiRoutes} from '../../constants';

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  return api.get(ApiRoutes.FILMS)
    .then(({data}) => {
      dispatch(ActionCreator.setIsLoading(true));
      dispatch(ActionCreator.loadFilms(dataToFilmsArrayAdapter(data)));
    })
    .catch(() => {
      dispatch(ActionCreator.setIsLoadingError(true));
    })
    .finally(() => {
      dispatch(ActionCreator.setIsLoading(false));
    });
};
