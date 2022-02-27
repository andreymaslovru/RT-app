import {API_URL} from '@env';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {endpoints} from '../shared/api/endpoints';

interface GetConvertPayload {
  from: string;
  to: string;
  amount: number;
}

interface GetConvertResponse {
  date: string;
  info: {
    rate: number;
    timestamp: number;
  };
  query: {
    amount: number;
    from: string;
    to: string;
  };
  result: number;
  success: boolean;
}

export const convertApi = createApi({
  reducerPath: endpoints.data.convert,
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: builder => ({
    getConvert: builder.query<GetConvertResponse, GetConvertPayload>({
      query: payload => ({
        url: endpoints.data.convert,
        params: payload,
        headers: {
          'x-rapidapi-host':
            'currency-conversion-and-exchange-rates.p.rapidapi.com',
          'x-rapidapi-key':
            'ae9fee07d9mshdb77db4023b0d21p122bf4jsnc7cde30b49e0',
        },
      }),
    }),
  }),
});

export const {useGetConvertQuery} = convertApi;
