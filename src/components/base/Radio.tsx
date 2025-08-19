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
  onChange?: (checked: boolean) => void;
};

const Radio: React.FC<PropsType> = React.memo(
  ({ checked: controlledChecked, defaultChecked = false, onChange, disabled = false, size = 16, color = 'black' }) => {
    const theme = useTheme();
    const textColor = theme?.colors?.[color as colorType] ?? color;
    const [internalChecked, setInternalChecked] = useState(controlledChecked ?? defaultChecked);
    const checked = controlledChecked ?? internalChecked;
    // 切换状态
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
        style={({ pressed }) => [styles.container, { opacity: disabled ? 0.6 : pressed ? 0.85 : 1 }]}
      >
        <Icon name={checked ? 'radio-marked' : 'radio'} size={size} color={textColor} />
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
});

export { Radio };
