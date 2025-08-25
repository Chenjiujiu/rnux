/** @format */

import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from './base/Button';
import { Text } from './base/Text';
import { useTheme } from '../theme';

type PropsType = {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (val: number) => void;
  style?: object;
};

const Stepper: React.FC<PropsType> = React.memo(
  ({ min = 0, max = 10, step = 1, value, onChange = () => {}, style }) => {
    const theme = useTheme();
    const { dynamicContainerStyle, dynamicButtonStyle, dynamicValueStyle, dynamicIconStyle } = useMemo(() => {
      return {
        dynamicContainerStyle: {
          borderRadius: theme.stepper.borderRadius,
          borderColor: theme.stepper.borderColor,
          backgroundColor: theme.stepper.backgroundColor,
          width: theme.stepper.width,
        },
        dynamicButtonStyle: {
          width: theme.stepper.height,
          height: theme.stepper.height,
        },
        dynamicValueStyle: {
          height: theme.stepper.height,
        },
        dynamicIconStyle: {
          fontSize: theme.stepper.fontSize,
        },
      } as const;
    }, [theme]);

    const currentValue = value ?? min;
    const valueRef = useRef<number>(currentValue);
    // 处理减少
    const handleMinus = useCallback(() => {
      const newValue = valueRef.current - step;
      if (newValue < min) return;
      onChange(newValue);
    }, [step, min, onChange]);
    // 处理增加
    const handleAdd = useCallback(() => {
      const newValue = valueRef.current + step;
      if (newValue > max) return;
      onChange(newValue);
    }, [step, max, onChange]);
    useEffect(() => {
      valueRef.current = currentValue;
    }, [currentValue]);

    return (
      <View style={[styles.container, dynamicContainerStyle, style]}>
        <Button
          variant={'text'}
          leftIcon={'minus'}
          disabled={currentValue <= min}
          style={[styles.button, dynamicButtonStyle]}
          iconStyle={dynamicIconStyle}
          onPress={handleMinus}
        />
        <View style={[styles.value, dynamicValueStyle]}>
          <Text weight={'medium'}>{currentValue}</Text>
        </View>
        <Button
          variant={'text'}
          leftIcon={'add'}
          disabled={currentValue >= max}
          style={[styles.button, dynamicButtonStyle]}
          iconStyle={dynamicIconStyle}
          onPress={handleAdd}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
  },
  button: {
    padding: 10,
  },
  value: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 20,
    width: 40,
  },
});

export { Stepper };
