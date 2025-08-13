/**
 * @format
 * */

import React from 'react';
import { type SharedValue, useSharedValue } from 'react-native-reanimated';

const dummy = { value: 0 } as SharedValue<number>;
const ScrollYContext = React.createContext(dummy);

// Y轴滚动位置的上下文提供者
function ScrollYProvider({ children }: { children: React.ReactNode }) {
  const scrollY = useSharedValue(0);
  return <ScrollYContext.Provider value={scrollY}>{children}</ScrollYContext.Provider>;
}

// Y轴滚动位置的上下文消费者
function useScrollY() {
  const scrollY = React.useContext(ScrollYContext);
  if (!scrollY) {
    console.log('useScrollY must be used inside ScrollYProvider');
  }
  return scrollY;
}


export { ScrollYProvider, useScrollY }
