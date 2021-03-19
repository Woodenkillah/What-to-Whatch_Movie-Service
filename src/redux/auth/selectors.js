export const getAuthorizationStatusSelector = (state) => state.auth.authorizationStatus;
export const getUserEmailSelector = (state) => state.auth.user.email;
export const getUserAvatarSelector = (state) => state.auth.user.avatar;
export const getErrorTypeSelector = (state) => state.auth.errorType;