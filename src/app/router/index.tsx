import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenSecond} from '../../pages/root/ScreenSecond';
import {ParamList, routeMap} from '../../pages/config';
import {ScreenFirst} from '../../pages/root/ScreenFirst';

const Stack = createStackNavigator<ParamList>();

interface RouterProps {}

export const Router: React.FC<RouterProps> = () => {
  return (
    <Stack.Navigator>
      <>
        <Stack.Screen name={routeMap.screenFirst} component={ScreenFirst} />
        <Stack.Screen name={routeMap.screentwo} component={ScreenSecond} />
      </>
    </Stack.Navigator>
  );
};
