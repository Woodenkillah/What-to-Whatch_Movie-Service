import {ActionCreator} from './actions';
import {ActionCreator as MiddlewaresActionCreator} from '../middlewares/actions';
import {LoadingStatuses, ApiRoutes, ReviewsErrorTypes} from '../../constants';

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
      dispatch(ActionCreator.setErrorType(``));
      dispatch(MiddlewaresActionCreator.redirectToRoute(`${ApiRoutes.FILMS}/${id}`));
    })
    .catch(() => {
      dispatch(ActionCreator.setErrorType(ReviewsErrorTypes.BAD_REQUEST));
    });
};
