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
      <SpeedyShippingBadge />
      <FlashSaleBadge />
      <FinalSaleBadge />
      <TimeSaleBadge time={20000000} />
      <CurveBadge />
      <Button variant={'outline'} size={'sm'} borderRadius={10} width={20} height={20}>
        <Icon name={'add'} />
      </Button>
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
