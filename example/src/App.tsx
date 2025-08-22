/** @format */

import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'rnux';
import EG from './EG';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ThemeProvider>
          <EG />
        </ThemeProvider>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
