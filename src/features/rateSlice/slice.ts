import {createSlice} from '@reduxjs/toolkit';
import {InitialTypes} from './types';

const initialState: InitialTypes = {
  base: null,
};

const rateSlice = createSlice({
  name: 'rate',
  initialState,
  reducers: {
    addBase: (state, {payload}) => {
      state.base = payload;
    },
  },
});

export const {addBase} = rateSlice.actions;
export default rateSlice.reducer;
