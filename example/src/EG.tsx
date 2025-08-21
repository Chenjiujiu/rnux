/** @format */
/** @format */

import { StyleSheet, View } from 'react-native';
import { Checkbox } from '../../src/components/base/Checkbox';
import { useState } from 'react';
import { Radio } from '../../src/components/base/Radio';
import { Chip } from '../../src/components/base/Chip';
import { ChipGroup } from '../../src/components/ChipGroup';

export default function EG() {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      {/*<Text size="h1">测试</Text>*/}
      {/*<Text size="h2">测试</Text>*/}
      {/*<Text size="h3">测试</Text>*/}
      {/*<Text size="h4">测试</Text>*/}
      {/*<Text size="h5" color={'errorLight'}>*/}
      {/*  测试*/}
      {/*</Text>*/}
      {/*<Icon name={'add'} />*/}
      {/*<Loading />*/}
      {/*<Divider fullWidth={true} gap={0} color={'errorLight'}>*/}
      {/*  <Text color={'errorLight'}>123123</Text>*/}
      {/*</Divider>*/}
      {/*<NawBadge />*/}
      {/*<PercentOffBadge percent={20} />*/}
      {/*<SpeedyShippingBadge />*/}
      {/*<FlashSaleBadge />*/}
      {/*<FinalSaleBadge />*/}
      {/*<TimeSaleBadge time={20000000} />*/}
      {/*<CurveBadge />*/}
      {/*<Button variant={'outline'} size={'sm'} borderRadius={10} width={20} height={20}>*/}
      {/*  <Icon name={'add'} />*/}
      {/*</Button>*/}
      {/*<Checkbox defaultChecked={checked} onChange={val => setChecked(val)} />*/}
      {/*<Radio checked={checked} onChange={val => setChecked(val)} hitSlop={10} />*/}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
