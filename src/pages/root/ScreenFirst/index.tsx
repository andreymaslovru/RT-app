import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addBase} from '../../../features/rateSlice/slice';
import {getLastRates} from '../../../shared/api/data/lastRates';
import {routeMap, routeNames, ScreenProps} from '../../config';

interface ScreenFirstProps extends ScreenProps<typeof routeNames.screenFirst> {}

export const ScreenFirst: React.FC<ScreenFirstProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const fetchRates = async () => {
    const response = (await getLastRates({from: 'USD', to: 'GBR'})).data;
    console.log('resonse', response);
    dispatch(addBase(response.base));
  };

  useEffect(() => {
    console.log('useEffect started');
    fetchRates();
    console.log('useEffect finished');
  });

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
