import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export const routeNames = {
  screenFirst: 'screenFirst',
  screentwo: 'screentwo',
} as const;

export type ParamList = {
  [routeNames.screenFirst]: undefined;
  [routeNames.screentwo]: undefined;
};

type RouteTypes = ValueOf<typeof routeNames>;

export type ScreenProps<P extends RouteTypes> = {
  navigation: StackNavigationProp<ParamList, P>;
  route: RouteProp<ParamList, P>;
};

export const routeMap = {
  ...routeNames,
} as const;
