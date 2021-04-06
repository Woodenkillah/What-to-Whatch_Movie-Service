export const DEFAULT_GENRE = `All genres`;
export const GENRES_LIST_LIMIT = 9;

export const DEFAULT_PAGE = 1;
export const FILMS_PER_PAGE = 8;

export const SIMILAR_FILMS_LIMIT = 4;

export const TAB_INDEX = {
  OVERVIEW: 0,
  DETAILS: 1,
  REVIEW: 2
};

export const COMMENTS_SIZES = {
  MIN: 50,
  MAX: 400
};

export const AxiosSettings = {
  BASE_URL: `https://6.react.pages.academy/wtw`,
  TIMEOUT: 5000
};

export const HttpStatusCodes = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401
};

export const AuthErrorTypes = {
  BAD_REQUEST: `auth/loginOrPasswordError`,
  UNAUTHORIZED: `auth/accessDenied`,
};

export const ReviewsErrorTypes = {
  BAD_REQUEST: `reviews/uploadReviewError`
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
