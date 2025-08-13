/** @format */

import { View, StyleSheet } from 'react-native';
import { ThemeProvider } from 'rnux';
import EG from './EG';

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider>
        <EG />
      </ThemeProvider>
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
