import {ActionType} from './action-types';

export const ActionCreator = {
  redirectToRoute: (route) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: route
  })
};
