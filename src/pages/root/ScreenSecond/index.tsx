import React from 'react';
import {Button, Text, View} from 'react-native';
import {useGetConvertQuery} from '../../../services/convert';
import {routeNames, ScreenProps} from '../../config';

interface ScreenSecondProps extends ScreenProps<typeof routeNames.screentwo> {}

export const ScreenSecond: React.FC<ScreenSecondProps> = ({navigation}) => {
  const {data, isLoading, error} = useGetConvertQuery({
    from: 'USD',
    to: 'EUR',
    amount: 1100,
  });

  if (isLoading) {
    return <Text>LOADING ......</Text>;
  }

  if (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
    return <Text>ERROR ......</Text>;
  }

  console.log('===data===', data);

  return (
    <View>
      <Text>Screenn twoo</Text>
      <Button title={'go first page'} onPress={() => navigation.goBack()} />
    </View>
  );
};
