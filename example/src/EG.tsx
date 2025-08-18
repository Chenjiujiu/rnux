/** @format */
/** @format */

import { StyleSheet, View } from 'react-native';
import {
  CurveBadge,
  Divider,
  FinalSaleBadge,
  FlashSaleBadge,
  Icon,
  Loading,
  NawBadge,
  PercentOffBadge,
  SpeedyBadge,
  Text,
  TimeSaleBadge,
} from 'rnux';

export default function EG() {
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
      <SpeedyBadge />
      <FlashSaleBadge />
      <FinalSaleBadge />
      <TimeSaleBadge time={20000000} />
      <CurveBadge />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
