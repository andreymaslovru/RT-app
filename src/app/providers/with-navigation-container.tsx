import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from '../../pages/navigation-service';

export const withNavigationContainer =
  (component: () => React.ReactNode) => () =>
    (
      <NavigationContainer ref={navigationRef}>
        {component()}
      </NavigationContainer>
    );
