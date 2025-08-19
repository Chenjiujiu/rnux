/** @format */
/** @format */

import { StyleSheet, View } from 'react-native';
import {
  Button,
  CurveBadge,
  Divider,
  FinalSaleBadge,
  FlashSaleBadge,
  Icon,
  Loading,
  NawBadge,
  PercentOffBadge,
  SpeedyShippingBadge,
  Text,
  TimeSaleBadge,
} from 'rnux';
import { Checkbox } from '../../src/components/base/Checkbox';
import { useState } from 'react';
import { Radio } from '../../src/components/base/Radio';

export default function EG() {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text size="h1">测试</Text>
      <Text size="h2">测试</Text>
      <Text size="h3">测试</Text>
      <Text size="h4">测试</Text>
      <Text size="h5" color={'errorLight'}>
        测试
      </Text>
      <Icon name={'add'} />
      <Loading />
      <Divider fullWidth={true} gap={0} color={'errorLight'}>
        <Text color={'errorLight'}>123123</Text>
      </Divider>
      <NawBadge />
      <PercentOffBadge percent={20} />
      <SpeedyShippingBadge />
      <FlashSaleBadge />
      <FinalSaleBadge />
      <TimeSaleBadge time={20000000} />
      <CurveBadge />
      <Button variant={'outline'} size={'sm'} borderRadius={10} width={20} height={20}>
        <Icon name={'add'} />
      </Button>
      <Checkbox defaultChecked={checked} onChange={val => setChecked(val)} />
      <Radio checked={checked} onChange={val => setChecked(val)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
