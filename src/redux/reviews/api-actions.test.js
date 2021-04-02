import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../axios/axios';
import {fetchReviewsList, uploadUserReview} from './api-actions';
import {ActionType} from './action-types';
import {ActionType as MiddlewareActionType} from '../middlewares/action-types';
import {mockUserReview, mockFilmReviewsData} from '../../test-mock';
import {ApiRoutes, LoadingStatuses, ReviewsErrorTypes} from '../../constants';

const api = createAPI(() => {});

describe(`Async api-actions work correctly`, () => {
  it(`Should make a correct API call to /comments for receiving film reviews`, () => {
    const apiMock = new MockAdapter(api);
    const {id} = mockUserReview;
    const dispatch = jest.fn();
    const setLoadingStatus = jest.fn(() => LoadingStatuses.LOADED);
    const fetchReviewsListAction = fetchReviewsList(id, setLoadingStatus);

    apiMock
      .onGet(`${ApiRoutes.COMMENTS}/${id}`)
      .reply(200, mockFilmReviewsData.api);

    return fetchReviewsListAction(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: mockFilmReviewsData.adapted
        });
        expect(setLoadingStatus).toHaveBeenCalledTimes(1);
      });

  });

  it(`Should make a correct API call to /comments for sending a film review`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const setErrorType = jest.fn(() => ReviewsErrorTypes.BAD_REQUEST);
    const {id, rating, comment} = mockUserReview;
    const uploadUserReviewAction = uploadUserReview(mockUserReview, setErrorType);

    apiMock
      .onPost(`${ApiRoutes.COMMENTS}/${id}`, {rating, comment})
      .reply(200, mockFilmReviewsData.api);

    return uploadUserReviewAction(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: MiddlewareActionType.REDIRECT_TO_ROUTE,
          payload: `${ApiRoutes.FILMS}/${id}`
        });
      });
  });

});
