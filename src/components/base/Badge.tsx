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
  children?: ReactNode | string;
};

const Badge: React.FC<PropsType> = React.memo(({ color = 'white', background = 'black', wrapperStyle, children }) => {
  const theme = useTheme();
  const badgeColor = theme?.colors?.[color as colorType] ?? color;
  const badgeBackground = theme?.colors?.[background as colorType] ?? background;
  return (
    <View style={[styles.wrapper, { backgroundColor: badgeBackground }, wrapperStyle]}>
      {children && typeof children === 'string' ? <Text style={{ color: badgeColor }}>{children}</Text> : children}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
});
// 预设上新徽章
const NawBadge: React.FC<{ tag?: string }> = memo(({ tag = 'New' }) => (
  <Badge color={'#7C5528'} background={'#F0E6E0'}>
    {tag}
  </Badge>
));
// 预设sale徽章
const SalePercentBadge: React.FC<{ percent: number }> = memo(({ percent }) => (
  <Badge background={'error'}>
    <Text color={'white'}>
      {'-'}
      {percent}
      {'%'}
    </Text>
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
// 预设SpeedyBadge徽章
const SpeedyBadge: React.FC<{ tag?: string }> = memo(({ tag = 'Speedy Shipping' }) => (
  <Badge background={'#F0E6E0'}>
    <>
      <Icon name={'flash'} color={'#7C5528'} size={10} />
      <Text color={'#7C5528'}>{tag}</Text>
    </>
  </Badge>
));
// 预设flash徽章
const FlashBadge: React.FC<{ remainingTime: number }> = memo(({ remainingTime = 0 }) => {
  const timeStr = useMemo(() => {
    if (remainingTime <= 0) return '00H : 00M : 00S';
    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    return `${formatTimePadStart(hours)}H : ${formatTimePadStart(minutes)}M : ${formatTimePadStart(seconds)}S`;
  }, [remainingTime]);
  if (remainingTime <= 0) {
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

export { Badge, NawBadge, FlashBadge, SalePercentBadge, FlashSaleBadge, FinalSaleBadge, SpeedyBadge };
