import React from 'react';

import {withProviders} from './providers';
import {Router} from './router';

const App = () => {
  return <Router />;
};

export default withProviders(App);
