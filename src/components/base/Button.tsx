/** @format */

import React, { useMemo } from 'react';
import {
  type DimensionValue,
  type GestureResponderEvent,
  Pressable,
  type StyleProp,
  StyleSheet,
  type TextStyle,
  View,
  type ViewStyle,
} from 'react-native';
import { Text } from './Text';
import { type ThemeType, useTheme } from '../../theme';
import { Spinner } from './Spinner';
import { Icon, type IconName } from './Icon';

type ButtonVariant = keyof ThemeType['button']['variant'];
type ButtonSize = keyof ThemeType['button']['sizeStyle'];
type weightType = 'light' | 'regular' | 'semiBold' | 'bold';

type PropsType = {
  disabled?: boolean;
  loading?: boolean;
  weight?: weightType;
  icon?: IconName;
  size?: ButtonSize;
  variant?: ButtonVariant;
  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: DimensionValue;
  hitSlop?: number | { top: number; bottom: number; left: number; right: number };
  label?: React.ReactNode | string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
};

const Button: React.FC<PropsType> = React.memo(
  ({
    disabled = false,
    loading = false,
    weight = 'regular',
    icon,
    label,
    size = 'md',
    variant = 'primary',
    width,
    height,
    borderRadius,
    hitSlop,
    onPress,
    style,
    labelStyle,
    iconStyle,
  }) => {
    const theme = useTheme();
    const { textColor, fontSize, dynamicStyle } = useMemo(() => {
      const colorSchemeConfig = theme?.button?.variant?.[variant] || theme?.button?.variant?.primary;
      const sizeStyle = theme?.button?.sizeStyle?.[size] || theme?.button?.sizeStyle?.md;
      const radius = borderRadius ?? theme.button.borderRadius;
      return {
        textColor: colorSchemeConfig.text,
        fontSize: sizeStyle.fontSize,
        dynamicStyle: {
          backgroundColor: colorSchemeConfig.background,
          borderRadius: radius,
          borderWidth: variant === 'outline' ? 1 : 0,
          borderColor: colorSchemeConfig.text,
          width: width || sizeStyle.width,
          height: height || sizeStyle.height,
        } as const,
      };
    }, [size, width, height, borderRadius, variant, theme]);
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled || loading}
        hitSlop={hitSlop}
        style={({ pressed }) => [styles.base, { opacity: disabled || loading ? 0.6 : pressed ? 0.85 : 1 }]}
      >
        <View style={[styles.content, dynamicStyle, style]}>
          {loading ? (
            <Spinner size="small" color={textColor} />
          ) : (
            <>
              {!!icon && <Icon name={icon as any} color={textColor} size={fontSize} style={iconStyle} />}
              {label && typeof label === 'string' ? (
                <Text color={textColor} weight={weight} size={fontSize} align={'center'} style={labelStyle}>
                  {label}
                </Text>
              ) : (
                label
              )}
            </>
          )}
        </View>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
});

export { Button };
