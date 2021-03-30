import {ActionCreator} from './actions';
import {dataToFilmsArrayAdapter} from '../../adapters';
import {LoadingStatuses, ApiRoutes} from '../../constants';

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  api.get(ApiRoutes.FILMS)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilms(dataToFilmsArrayAdapter(data)));
      dispatch(ActionCreator.setLoading(LoadingStatuses.LOADED));
    })
    .catch(() => {
      dispatch(ActionCreator.setLoading(LoadingStatuses.FAILED));
    });
};
