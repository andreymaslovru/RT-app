import {axios} from '../base';
import {endpoints} from '../endpoints';
import {LastRatesPayload, LastRatesResponse} from './types';

export const getLastRates = (payload: LastRatesPayload) => {
  return axios.get<LastRatesResponse>(endpoints.data.latest, {
    params: payload,
  });
};
