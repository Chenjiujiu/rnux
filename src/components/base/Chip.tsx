/** @format */

import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, type ViewStyle } from 'react-native';
import { Text } from './Text';
import { type ThemeType, useTheme } from '../../theme';
import { Icon } from '../base/Icon';

type colorType = keyof ThemeType['colors'];
type variantType = keyof ThemeType['chip']['variant'];
type sizeType = keyof ThemeType['chip']['sizeStyle'];
type PropsType = {
  id?: string | number;
  label: string;
  borderWidth?: number;
  showClose?: boolean;
  color?: colorType | string; // 字体颜色
  borderColor?: colorType | string; // 背景颜色
  variant?: variantType;
  size?: sizeType;
  height?: number; // 高度
  disabled?: boolean;
  selected?: boolean; // 受控状态
  defaultSelected?: boolean; // 非受控初始状态
  onPress?: (id: string | number, selected: boolean) => void;
  style?: ViewStyle; // 自定义样式
};

const Chip: React.FC<PropsType> = React.memo(
  ({
    id,
    label,
    borderWidth,
    disabled = false,
    showClose = false,
    color,
    borderColor: borderColorProp,
    variant = 'primary',
    size = 'md',
    height,
    onPress,
    selected: controlledSelected,
    defaultSelected = false,
    style,
  }) => {
    const theme = useTheme();
    const [internalSelected, setInternalSelected] = useState(controlledSelected ?? defaultSelected);
    const selected = controlledSelected ?? internalSelected;

    const dynamicStyle = useMemo(() => {
      const variantStyle = theme?.chip?.variant?.[variant] ?? theme?.chip?.variant?.primary;
      const sizeStyle = theme?.chip?.sizeStyle?.[size] ?? theme?.chip?.sizeStyle?.md;
      const textColor = theme?.colors?.[color as colorType] ?? color ?? variantStyle.color ?? 'black';
      const borderColor =
        theme?.colors?.[borderColorProp as colorType] ?? borderColorProp ?? variantStyle.borderColor ?? 'black';
      return {
        borderWidth: borderWidth ?? sizeStyle.borderWidth ?? 1,
        paddingHorizontal: sizeStyle.paddingHorizontal,
        borderColor: selected ? textColor : borderColor,
        height: height ?? sizeStyle.height,
        minWidth: sizeStyle.minWidth,
      } as const;
    }, [theme, variant, size, color, borderColorProp, borderWidth, height, selected]);

    const handlePress = () => {
      if (disabled) return;
      const newState = !selected;
      if (controlledSelected === undefined) {
        setInternalSelected(newState); // 非受控模式更新状态
      }
      const itemId = id ?? label; // 使用id或label作为唯一标识
      onPress?.(itemId, newState);
    };
    return (
      <Pressable
        onPress={handlePress}
        disabled={disabled}
        style={({ pressed }) => [{ opacity: disabled ? 0.6 : pressed ? 0.85 : 1 }, styles.base, dynamicStyle, style]}
      >
        <Text color={color}>{label}</Text>
        {showClose && <Icon name="close" size={8} />}
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { Chip };
