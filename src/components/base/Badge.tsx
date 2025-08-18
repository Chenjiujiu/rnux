/** @format */

import React, { memo, type ReactNode, useMemo } from 'react';
import { Icon } from './Icon';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { Text } from './Text';
import { type ThemeType, useTheme } from '../../theme';
import { formatTimePadStart } from '../../utils';

type colorType = keyof ThemeType['colors'];

type PropsType = {
  color?: colorType | string;
  background?: colorType | string;
  wrapperStyle?: ViewStyle;
  horizontal?: boolean;
  width?: number;
  height?: number;
  children?: ReactNode | string;
};

const Badge: React.FC<PropsType> = React.memo(
  ({ color = 'white', background = 'black', horizontal = false, height, width, wrapperStyle, children }) => {
    const theme = useTheme();
    const badgeColor = theme?.colors?.[color as colorType] ?? color;
    const badgeBackground = theme?.colors?.[background as colorType] ?? background;
    return (
      <View style={[styles.wrapper, { backgroundColor: badgeBackground, height, width }, wrapperStyle]}>
        {children && typeof children === 'string' ? (
          <Text
            style={[{ color: badgeColor }, horizontal && styles.horizontalText, horizontal && { width: height || 0 }]}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  horizontalText: {
    transform: [{ rotate: '90deg' }],
    textAlign: 'center',
  },
});
// 预设上新徽章
const NawBadge: React.FC<{ tag?: string }> = memo(({ tag = 'New' }) => (
  <Badge color={'#7C5528'} background={'#F0E6E0'}>
    {tag}
  </Badge>
));
// 预设大码徽章
const CurveBadge: React.FC<{ tag?: string }> = memo(({ tag = 'CURVE' }) => (
  <Badge color={'black'} background={'#F8F8F851'} height={50} width={24} horizontal={true}>
    {tag}
  </Badge>
));
// 预设sale徽章
const PercentOffBadge: React.FC<{ percent: number }> = memo(({ percent }) => (
  <Badge background={'error'}>
    <Text color={'white'}>
      {'-'}
      {percent}
      {'%'}
    </Text>
  </Badge>
));
// 预设SpeedyBadge徽章
const SpeedyBadge: React.FC<{ tag?: string }> = memo(({ tag = 'Speedy Shipping' }) => (
  <Badge background={'#F0E6E0'}>
    <>
      <Icon name={'flash'} color={'#7C5528'} size={10} />
      <Text color={'#7C5528'}>{tag}</Text>
    </>
  </Badge>
));
// 预设Flash Sale徽章
const FlashSaleBadge: React.FC<{ tag?: string }> = memo(({ tag = 'Flash Sale' }) => (
  <Badge color={'black'} background={'primaryLight'}>
    {tag}
  </Badge>
));
// 预设Final Sale徽章
const FinalSaleBadge: React.FC<{ tag?: string }> = memo(({ tag = 'Final Sale' }) => (
  <Badge color={'primaryLight'} background={'black'}>
    {tag}
  </Badge>
));
// 预设flash徽章
const TimeSaleBadge: React.FC<{ time: number }> = memo(({ time = 0 }) => {
  const timeStr = useMemo(() => {
    if (time <= 0) return '00H : 00M : 00S';
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${formatTimePadStart(hours)}H : ${formatTimePadStart(minutes)}M : ${formatTimePadStart(seconds)}S`;
  }, [time]);
  if (time <= 0) {
    return null;
  }
  return (
    <Badge background={'black'}>
      <>
        <Icon name={'flash'} color={'primaryLight'} size={10} />
        <Text color={'primaryLight'}>{timeStr}</Text>
      </>
    </Badge>
  );
});

export { Badge, NawBadge, PercentOffBadge, SpeedyBadge, FlashSaleBadge, FinalSaleBadge, TimeSaleBadge, CurveBadge };
