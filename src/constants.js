export const DEFAULT_GENRE = `All genres`;

export const HttpStatusCodes = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401
};

export const AuthErrorTypes = {
  BAD_REQUEST: `auth/loginOrPasswordError`,
  UNAUTHORIZED: `auth/accessDenied`
};

export const ReviewsErrorTypes = {
  BAD_REQUEST: `reviews/uploadReviewError`
};

export const LoadingStatuses = {
  PENDING: `load/pending`,
  LOADING: `load/loading`,
  LOADED: `load/loaded`,
  FAILED: `load/failed`
};

export const AuthStatuses = {
  AUTH: `auth/auth`,
  NO_AUTH: `auth/noAuth`
};

export const AppRoutes = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILMS: `/films`,
  PLAYER: `/player`
};

export const ApiRoutes = {
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  FILMS: `/films`,
  PROMO: `/films/promo`,
  COMMENTS: `/comments`,
  FAVORITES: `/favorite`
};

export const FavoriteStatuses = {
  ADD_FAVORITE: 1,
  REMOVE_FAVORITE: 0
};
