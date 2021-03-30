import get from 'lodash/get';

export const getTargetFilmDataSelector = (state) => get(state, `targetFilm.targetFilmData`, {});
