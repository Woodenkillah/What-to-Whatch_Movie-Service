import get from 'lodash/get';

export const getTargetFilmDataSelector = (state) => get(state, `targetFilm.targetFilmData`, null);
export const getTargetFilmIsLoadingSelector = (state) => get(state, `targetFilm.isLoading`, false);
export const getTargetFilmIsLoadingErrorSelector = (state) => get(state, `targetFilm.isLoadingError`, false);
