import React from 'react';
import {Button, Text, View} from 'react-native';
import {routeMap, routeNames, ScreenProps} from '../../config';

interface ScreenFirstProps extends ScreenProps<typeof routeNames.screenFirst> {}

export const ScreenFirst: React.FC<ScreenFirstProps> = ({navigation}) => {
  return (
    <View>
      <Text>Screenn first</Text>
      <Button
        title={'go second page'}
        onPress={() => navigation.navigate(routeMap.screentwo)}
      />
    </View>
  );
};
