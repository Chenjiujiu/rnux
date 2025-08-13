/** @format */
/** @format */

import { View, StyleSheet } from 'react-native';
import { Icon, Loading, Text } from 'rnux';

export default function EG() {
  return (
    <View style={styles.container}>
      <Text size="h1">测试</Text>
      <Text size="h2">测试</Text>
      <Text size="h3">测试</Text>
      <Text size="h4">测试</Text>
      <Text size="h5" color={'errorLight'}>测试</Text>
      <Icon name={'add'} />
      <Loading />
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
