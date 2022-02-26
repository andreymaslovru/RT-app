import React from 'react';
import {Button, Text, View} from 'react-native';
import {routeNames, ScreenProps} from '../../config';

interface ScreenSecondProps extends ScreenProps<typeof routeNames.screentwo> {}

export const ScreenSecond: React.FC<ScreenSecondProps> = ({navigation}) => {
  return (
    <View>
      <Text>Screenn twoo</Text>
      <Button title={'go first page'} onPress={() => navigation.goBack()} />
    </View>
  );
};
