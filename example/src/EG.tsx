/** @format */
/** @format */

import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import {
  RangeSlider,
  ChipGroup,
  Chip,
  Radio,
  Checkbox,
  Text,
  Icon,
  Loading,
  Divider,
  NawBadge,
  PercentOffBadge,
  SpeedyShippingBadge,
  FlashSaleBadge,
  FinalSaleBadge,
  TimeSaleBadge,
  CurveBadge,
  Button,
} from '../../src/components';

export default function EG() {
  const [checked, setChecked] = useState(false);
  const [range, setRange] = useState<[number, number]>([10, 60]);
  const [defaultValue] = useState<[number, number]>([10, 60]);
  const handleChange = data => {
    setRange(data);
  };

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
      <Button
        onPress={() => {
          setRange([20, 80]);
        }}
      >
        <Icon name={'add'} />
      </Button>
      <Checkbox defaultChecked={checked} onChange={val => setChecked(val)} />
      <Radio checked={checked} onChange={val => setChecked(val)} hitSlop={10} />
      <Chip label={'1'} selected={true} showClose={false} size={'md'} />
      <ChipGroup
        options={[
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
          { label: '选项3', value: '3' },
          { label: '选项3', value: '4' },
          { label: '选项3', value: '5' },
          { label: '选项3', value: '6' },
          { label: '选项3', value: '7' },
          { label: '选项3', value: '8' },
          { label: '选项3', value: '9' },
          { label: '选项3', value: '10' },
        ]}
        gap={12}
        horizontal={false}
        multiple={true}
      />
      <RangeSlider min={0} max={102} step={3} defaultValue={defaultValue} onChange={handleChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
