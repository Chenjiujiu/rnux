/** @format */

import React, { useState } from 'react';
import { Pressable, type StyleProp, StyleSheet, type TextStyle } from 'react-native';
import { type ThemeType, useTheme } from '../../theme';
import { Icon } from '../base/Icon';
import { Text } from './Text';

type colorType = keyof ThemeType['colors'];

type PropsType = {
  checked?: boolean; // 受控
  defaultChecked?: boolean; // 非受控初始值
  size?: number;
  disabled?: boolean;
  color?: colorType | string;
  vertical?: boolean; // 是否垂直排列
  hitSlop?: number | { top: number; bottom: number; left: number; right: number };
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode | string;
  labelStyle?: StyleProp<TextStyle>;
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
    label,
    labelStyle,
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
        {label && typeof label === 'string' ? (
          <Text color={textColor} align={'center'} style={labelStyle}>
            {label}
          </Text>
        ) : (
          label
        )}
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
