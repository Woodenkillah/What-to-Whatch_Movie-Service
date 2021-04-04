import axios from 'axios';
import {AxiosSettings, HttpStatusCodes} from '../constants';

export const createAPI = (unAuthorized) => {
  const api = axios.create({
    baseURL: AxiosSettings.BASE_URL,
    timeout: AxiosSettings.TIMEOUT,
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
