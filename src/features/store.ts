import {configureStore} from '@reduxjs/toolkit';
import {convertApi} from '../services/convert';
import rateReducer from './rateSlice/slice';

// const middlewares = getDefaultMiddleware({
//   immutableCheck: false,
// });

// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default;
//   middlewares.push(createDebugger());
// }

export const store = configureStore({
  reducer: {
    rate: rateReducer,
    [convertApi.reducerPath]: convertApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(convertApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
