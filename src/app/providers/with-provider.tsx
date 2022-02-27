import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../features/store';

export const withProvider = (component: () => React.ReactNode) => () =>
  <Provider store={store}>{component()}</Provider>;
