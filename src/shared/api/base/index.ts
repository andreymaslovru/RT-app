import {API_URL} from '@env';
import axiosPackage from 'axios';

const baseURL = API_URL;

if (!baseURL) {
  throw new Error('API URL should be specified in .env');
}

export const axios = axiosPackage.create({
  baseURL,
  headers: {
    'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
    'x-rapidapi-key': 'ae9fee07d9mshdb77db4023b0d21p122bf4jsnc7cde30b49e0',
  },
});
