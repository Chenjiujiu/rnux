/** @format */

import React, { useEffect, useMemo } from 'react';
import { type ThemeType, useTheme } from '../../theme';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

type sizeType = keyof ThemeType['spinner']['size'];
type borderWidthType = keyof ThemeType['spinner']['borderWidth'];
type colorType = keyof ThemeType['colors'];
type PropsType = {
  size?: sizeType | number;
  color?: colorType | string;
  duration?: number;
};

const Spinner: React.FC<PropsType> = React.memo(({ size = 'small', color = 'black', duration = 800 }) => {
  const theme = useTheme();
  const spin = useSharedValue(0);
  // 解析大小和颜色
  const { spinSize, spinWeight, spinColor } = useMemo(() => {
    const resolvedSize = theme?.spinner?.size?.[size as sizeType] || (size as number);
    const resolvedWeight = theme?.spinner?.borderWidth?.[size as borderWidthType] || theme?.spinner?.borderWidth.medium;
    const resolvedColor = theme?.colors?.[color as colorType] ?? color;
    return {
      spinSize: resolvedSize,
      spinWeight: resolvedWeight,
      spinColor: resolvedColor,
    };
  }, [size, color, theme]);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${spin.value * 360}deg` }],
  }));
  useEffect(() => {
    spin.value = withRepeat(
      withTiming(1, {
        duration,
        easing: Easing.linear,
      }),
      -1, // 无限循环
      false
    );
  }, [duration, spin]);

  return (
    <Animated.View
      style={[
        {
          width: spinSize,
          height: spinSize,
          borderRadius: spinSize / 2,
          borderWidth: spinWeight,
          borderColor: spinColor,
          borderTopColor: `${spinColor}4d`, // 半透明制造缺口
        },
        animatedStyle,
      ]}
    />
  );
});

export { Spinner };
