/** @format */
/** @format */

import { StyleSheet, View } from 'react-native';
import {
  Divider,
  FinalSaleBadge,
  FlashBadge,
  FlashSaleBadge,
  Icon,
  Loading,
  NawBadge,
  SalePercentBadge,
  SpeedyBadge,
  Text,
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
      <SpeedyBadge />
      <SalePercentBadge percent={20} />
      <FlashBadge remainingTime={20000000} />
      <FlashSaleBadge />
      <FinalSaleBadge />
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
