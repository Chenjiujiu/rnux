/** @format */
import React, { useCallback, useEffect, useState } from 'react';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { type LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

type RangeValue = [number, number];

type PropsType = {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: RangeValue;
  onChange?: (val: RangeValue) => void;
};

const RangeSlider: React.FC<PropsType> = React.memo(
  ({ min = 0, max = 100, step = 1, defaultValue = [0, 0] as RangeValue, onChange = () => {} }) => {
    const [stepWidth, setStepWidth] = useState(0);
    const active = useSharedValue('');
    const trackWidth = useSharedValue(0);
    const stepWidthShare = useSharedValue(0);
    const leftX = useSharedValue(0);
    const rightX = useSharedValue(0);
    // 每次滑动时候的起始值
    const leftStartX = useSharedValue(0);
    const rightStartX = useSharedValue(0);
    // 修改的值
    const moveDV = useSharedValue(0);
    // 将数值转换为像素
    const toX = useCallback((val: number) => Math.round((val - min) / step) * stepWidth || 0, [min, step, stepWidth]);
    // 将像素转换为数值
    const toValue = useCallback((x: number) => min + Math.round(x / stepWidth) * step || min, [min, step, stepWidth]);
    const handleChange = useCallback(
      (l: number, r: number) => {
        const v1 = toValue(l);
        const v2 = toValue(r);
        onChange([v1, v2]);
      },
      [toValue, onChange]
    );
    //  拖拽手势
    const leftGesture = Gesture.Pan()
      .minDistance(1)
      .onBegin(() => {
        active.value = 'left';
        leftStartX.value = leftX.value; // 手势开始时的初始位置
        moveDV.value = 0;
      })
      .onUpdate(e => {
        const currentX = Math.max(0, leftStartX.value + e.translationX);
        leftX.value = Math.min(currentX, rightX.value - stepWidthShare.value);
        const deltaStep = Math.round((leftX.value - leftStartX.value) / stepWidthShare.value);
        if (deltaStep !== moveDV.value) {
          moveDV.value = deltaStep;
          runOnJS(handleChange)(leftX.value, rightX.value);
        }
      })
      .onEnd(() => {
        active.value = '';
        // 手势结束时，对齐到 stepWidth
        leftX.value = Math.round(leftX.value / stepWidthShare.value) * stepWidthShare.value;
        if (leftStartX.value !== leftX.value) {
          runOnJS(handleChange)(leftX.value, rightX.value);
        }
      });
    const rightGesture = Gesture.Pan()
      .minDistance(1)
      .onBegin(() => {
        active.value = 'right';
        rightStartX.value = rightX.value; // 手势开始时的初始位置
        moveDV.value = 0;
      })
      .onUpdate(e => {
        const currentX = Math.min(trackWidth.value, rightStartX.value + e.translationX);
        rightX.value = Math.max(currentX, leftX.value + stepWidthShare.value);
        const deltaStep = Math.round((rightX.value - rightStartX.value) / stepWidthShare.value);
        if (deltaStep !== moveDV.value) {
          moveDV.value = deltaStep;
          runOnJS(handleChange)(leftX.value, rightX.value);
        }
      })
      .onEnd(() => {
        active.value = '';
        // 手势结束时，对齐到 stepWidth
        rightX.value = Math.round(rightX.value / stepWidthShare.value) * stepWidthShare.value;
        if (rightStartX.value !== rightX.value) {
          runOnJS(handleChange)(leftX.value, rightX.value);
        }
      });
    //  样式
    const leftStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: leftX.value }],
      borderColor: active.value === 'left' ? '#111111' : '#E7E7E7',
    }));
    const rightStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: rightX.value }],
      borderColor: active.value === 'right' ? '#111111' : '#E7E7E7',
    }));
    const selectedStyle = useAnimatedStyle(() => ({
      left: leftX.value,
      width: rightX.value - leftX.value,
    }));
    // 布局更新
    const onLayout = useCallback(
      (e: LayoutChangeEvent) => {
        const layoutWidth = e.nativeEvent.layout.width;
        trackWidth.value = layoutWidth;
        const stepCount = (max - min) / step;
        const sw = layoutWidth / stepCount || 0;
        stepWidthShare.value = sw;
        setStepWidth(sw);
      },
      [trackWidth, max, min, step, stepWidthShare]
    );
    // 初始化位置
    useEffect(() => {
      const [start, end] = defaultValue;
      leftX.value = toX(start);
      rightX.value = toX(end);
    }, [defaultValue, leftX, rightX, toX]);
    return (
      <View style={styles.container}>
        <View style={styles.track} onLayout={onLayout}>
          {/* 选中范围高亮 */}
          <Animated.View style={[styles.selected, selectedStyle]} />
          {/*/!* 左滑块 *!/*/}
          <GestureDetector gesture={leftGesture}>
            <Animated.View style={[styles.thumb, leftStyle]} />
          </GestureDetector>
          {/*/!* 右滑块 *!/*/}
          <GestureDetector gesture={rightGesture}>
            <Animated.View style={[styles.thumb, rightStyle]} />
          </GestureDetector>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    height: 18,
    paddingHorizontal: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  track: {
    height: 4,
    width: '100%',
    backgroundColor: '#E7E7E7',
  },
  selected: {
    position: 'absolute',
    height: 4,
    backgroundColor: '#111111',
  },
  thumb: {
    position: 'absolute',
    top: -7, // -(18/2 -4/2)
    left: -9,
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    backgroundColor: '#ffffff',
    zIndex: 1,
  },
});

export { RangeSlider };
