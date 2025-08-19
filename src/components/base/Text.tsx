/** @format */

import React, { useMemo } from 'react';
import {
  type FlexAlignType,
  Platform,
  type StyleProp,
  StyleSheet,
  Text as NativeText,
  type TextProps as RNTextProps,
  type TextStyle,
} from 'react-native';
import { type ThemeType, useTheme } from '../../theme';

const alignSelfMap = {
  center: 'center',
  left: 'flex-start',
  right: 'flex-end',
};

type sizeType = keyof ThemeType['text']['size'];
type colorType = keyof ThemeType['colors'];
type weightType = keyof typeof weightStyles;

type PropsType = RNTextProps & {
  size?: sizeType | number;
  lineHeight?: number | string;
  color?: colorType | string;
  weight?: weightType;
  align?: 'center' | 'left' | 'right';
  decoration?: 'unset' | 'underline' | 'strikeThrough';
  isTruncated?: boolean;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

const Text: React.FC<PropsType> = React.memo(
  ({
    size = 'h5',
    color = 'black',
    weight = 'regular',
    align = 'left',
    lineHeight = 1.2 as number | string,
    decoration,
    isTruncated = false,
    numberOfLines,
    style,
    children,
    ...rest
  }) => {
    const theme = useTheme();
    const dynamicStyle = useMemo(() => {
      const textColor = theme?.colors?.[color as colorType] ?? color;
      const textSize = theme?.text?.size?.[size as sizeType] ?? size;
      const decorationStyle =
        decoration === 'underline'
          ? {
              borderBottomWidth: 1,
              borderBottomColor: textColor,
              alignSelf: alignSelfMap?.[align] as FlexAlignType,
            }
          : decoration === 'strikeThrough'
            ? {
                textDecorationLine: 'line-through' as const,
                textDecorationColor: textColor,
              }
            : null;
      const textLineHeight =
        typeof lineHeight === 'number'
          ? Math.round(textSize * lineHeight)
          : lineHeight.startsWith('+')
            ? textSize + parseInt(lineHeight, 10)
            : parseInt(lineHeight, 10);
      return {
        fontSize: textSize,
        lineHeight: textLineHeight,
        color: textColor,
        textAlign: align,
        // 下边距1 为调整 有下划线与无下划线的高度差
        paddingBottom: decoration === 'underline' || decoration === 'unset' ? 0 : 1,
        ...weightStyles[weight],
        ...decorationStyle,
      };
    }, [theme, color, size, decoration, align, lineHeight, weight]);
    return (
      <NativeText
        style={[dynamicStyle, style]}
        numberOfLines={isTruncated ? (numberOfLines ?? 1) : undefined}
        ellipsizeMode={isTruncated ? 'tail' : undefined}
        {...rest}
      >
        {children}
      </NativeText>
    );
  }
);
const weightStyles = StyleSheet.create({
  // 300
  light: {
    fontFamily: Platform.OS === 'ios' ? 'PingFangSC' : 'Roboto-Light',
    fontWeight: '300',
  },
  // 400
  regular: {
    fontFamily: Platform.OS === 'ios' ? 'PingFangSC' : 'Roboto-Regular',
    fontWeight: '400',
  },
  // 500
  medium: {
    fontFamily: Platform.OS === 'ios' ? 'PingFangSC' : 'Roboto-Medium',
    fontWeight: '500',
  },
  // 600
  semiBold: {
    fontFamily: Platform.OS === 'ios' ? 'PingFangSC' : 'Roboto-SemiBold',
    fontWeight: '600',
  },
  // 700, Roboto-Bold 700 不生效
  bold: {
    fontFamily: Platform.OS === 'ios' ? 'PingFangSC' : 'Roboto-Bold',
    fontWeight: Platform.OS === 'ios' ? '700' : '600',
  },
});

export { Text };
