/** @format */

import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { type ThemeType, useTheme } from '../../theme';
import { Icon } from '../base/Icon';

type colorType = keyof ThemeType['colors'];

type PropsType = {
  checked?: boolean; // 受控
  defaultChecked?: boolean; // 非受控初始值
  size?: number;
  disabled?: boolean;
  color?: colorType | string;
  vertical?: boolean; // 是否垂直排列
  children?: React.ReactNode;
  hitSlop?: number | { top: number; bottom: number; left: number; right: number };
  onChange?: (checked: boolean) => void;
};

const Checkbox: React.FC<PropsType> = React.memo(
  ({
    checked: controlledChecked,
    defaultChecked = false,
    onChange,
    disabled = false,
    size = 16,
    color = 'black',
    hitSlop,
    vertical = false,
    children,
  }) => {
    const theme = useTheme();
    const textColor = theme?.colors?.[color as colorType] ?? color;
    const [internalChecked, setInternalChecked] = useState(controlledChecked ?? defaultChecked);
    const checked = controlledChecked ?? internalChecked;
    const toggle = () => {
      if (disabled) return;
      const newChecked = !checked;
      if (controlledChecked === undefined) {
        setInternalChecked(newChecked);
      }
      onChange?.(newChecked);
    };
    return (
      <Pressable
        onPress={toggle}
        hitSlop={hitSlop}
        style={({ pressed }) => [
          styles.container,
          vertical && styles.vertical,
          { opacity: disabled ? 0.6 : pressed ? 0.85 : 1 },
        ]}
      >
        <Icon name={checked ? 'checkbox-marked-fill' : 'checkbox'} size={size} color={textColor} />
        {children}
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6, // 间距
  },
  vertical: {
    flexDirection: 'column',
  },
});

export { Checkbox };
