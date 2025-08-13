/** @format */

import React, { memo, type ReactNode } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { type ThemeType, useTheme } from '../../theme';
import { Text } from '../../components';

type colorType = keyof ThemeType['colors'];
interface PropsType {
  color?: colorType | string;
  wrapperStyle?: ViewStyle;
  fullWidth?: boolean;
  gap?: number;
  children?: ReactNode | string;
}

const Divider: React.FC<PropsType> = memo(
  ({ children, color = 'black', wrapperStyle, gap = 10, fullWidth = false }) => {
    const theme = useTheme();
    const dividerColor = theme?.colors?.[color as colorType] ?? color;
    return (
      <View style={[styles.wrapper, { gap }, !fullWidth && { paddingHorizontal: theme.space.primary }, wrapperStyle]}>
        <View style={[styles.line, { borderTopColor: dividerColor }]} />
        {children && typeof children === 'string' ? <Text style={{ color: dividerColor }}>{children}</Text> : children}
        <View style={[styles.line, { borderTopColor: dividerColor }]} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 10,
    justifyContent: 'space-between',
  },
  fullWidth: {
    paddingHorizontal: 0,
  },
  line: {
    flex: 1,
    borderTopWidth: 1,
  },
});

export { Divider };
