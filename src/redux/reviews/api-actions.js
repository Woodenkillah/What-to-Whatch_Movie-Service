import {ActionCreator} from './actions';
import {LoadingStatuses, ApiRoutes} from '../../constants';

export const fetchReviewsList = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setLoading(LoadingStatuses.LOADING));
  api.get(`${ApiRoutes.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadReviews(data));
      dispatch(ActionCreator.setLoading(LoadingStatuses.LOADED));
    })
    .catch(() => {
      dispatch(ActionCreator.setLoading(LoadingStatuses.FAILED));
    });
};

export const uploadUserReview = ({id, rating, comment}) => (dispatch, _getState, api) => {
  api.post(`${ApiRoutes.COMMENTS}/${id}`, {rating, comment})
    .then(() => {
      dispatch(ActionCreator.setLoading(LoadingStatuses.LOADED));
    })
    .catch(() => {
      dispatch(ActionCreator.setLoading(LoadingStatuses.FAILED));
    });
};
