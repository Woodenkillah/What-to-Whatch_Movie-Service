import {ActionCreator} from './actions';
import {dataToReviewItemAdapter} from '../../adapters';
import {ActionCreator as MiddlewaresActionCreator} from '../middlewares/actions';
import {LoadingStatuses, ApiRoutes, ReviewsErrorTypes} from '../../constants';

export const fetchReviewsList = (id, setLoadingStatus) => (dispatch, _getState, api) => {
  return api.get(`${ApiRoutes.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadReviews(dataToReviewItemAdapter(data)));
      setLoadingStatus(LoadingStatuses.LOADED);
    })
    .catch(() => {
      setLoadingStatus(LoadingStatuses.FAILED);
    });
};

export const uploadUserReview = ({id, rating, comment}, setErrorType) => (dispatch, _getState, api) => {
  return api.post(`${ApiRoutes.COMMENTS}/${id}`, {rating, comment})
    .then(() => {
      dispatch(MiddlewaresActionCreator.redirectToRoute(`${ApiRoutes.FILMS}/${id}`));
    })
    .catch(() => {
      setErrorType(ReviewsErrorTypes.BAD_REQUEST);
    });
};
