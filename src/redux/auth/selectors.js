import {AuthStatuses} from '../../constants';
import get from 'lodash/get';

export const getAuthorizationStatusSelector = (state) => get(state, `auth.authorizationStatus`, AuthStatuses.NO_AUTH);
export const getUserEmailSelector = (state) => get(state, `auth.user.email`, null);
export const getUserAvatarSelector = (state) => get(state, `auth.user.avatar`, null);
export const getAuthErrorTypeSelector = (state) => get(state, `auth.errorType`, null);
