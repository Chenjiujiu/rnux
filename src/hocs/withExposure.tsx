/** @format */

import React, { useCallback, useState } from 'react';
import { useScrollY } from './ScrollYProvider';
import Animated, { runOnJS, useAnimatedReaction, useAnimatedRef, useSharedValue } from 'react-native-reanimated';
import { Dimensions } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

type Layout = { top: number; bottom: number } | null;
interface WithExposureProps {
  exposed?: boolean;
}

const withExposure = <P extends object>(
  Component: React.ComponentType<P & WithExposureProps>,
  offsetBottom = 100,
  offsetTop = 100
): React.FC<P> => {
  const Wrapper: React.FC<P> = props => {
    const scrollY = useScrollY();
    const ref = useAnimatedRef<Animated.View>();
    const layout = useSharedValue<Layout>(null);
    const [exposed, setExposed] = useState(false);


    const checkExposure = (top: number, bottom: number) => {
      const scrollTop = scrollY.value + offsetTop;
      const scrollBottom = scrollY.value + SCREEN_HEIGHT - offsetBottom;
      return top < scrollBottom && bottom > scrollTop;
    };

    const handleLayout = useCallback(
      (event: any) => {
        const { y: pageY, height } = event.nativeEvent.layout;
        const top = pageY + scrollY.value;
        const bottom = pageY + height + scrollY.value;
        layout.value = { top, bottom };
        const isExposure = checkExposure(top, bottom);
        setExposed(isExposure);
      },
      [scrollY, layout]
    );

    useAnimatedReaction(
      () => {
        if (!layout.value) return false;
        const { top, bottom } = layout.value;
        return checkExposure(top, bottom);
      },
      (isVisible, wasVisible) => {
        if (isVisible !== wasVisible) {
          runOnJS(setExposed)(isVisible);
        }
      }
    );
    return (
      <Animated.View ref={ref} onLayout={handleLayout}>
        <Component {...props} exposed={exposed} />
      </Animated.View>
    );
  };
  // 方便调试和识别组件
  Wrapper.displayName = `withExposure(${Component.displayName || Component.name || 'Component'})`;
  return Wrapper;
};

export { withExposure };
