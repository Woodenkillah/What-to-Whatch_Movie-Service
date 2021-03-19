import axios from 'axios';
import {HttpStatusCodes} from '../constants';

const BASE_URL = `https://6.react.pages.academy/wtw`;
const TIMEOUT = 5000;

export const createAPI = (unAuthorized) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpStatusCodes.UNAUTHORIZED) {
      unAuthorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
