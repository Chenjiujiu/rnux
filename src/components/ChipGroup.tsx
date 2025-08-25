/** @format */

import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Chip } from './base/Chip';

type PropsType = {
  options: { label: string; value: string }[];
  value?: string | string[]; // 受控
  defaultValue?: string | string[]; // 非受控
  multiple?: boolean; // 是否多选
  horizontal?: boolean; // 横向滚动
  gap: number; // 间距
  onChange?: (val: string | undefined | string[]) => void;
};

const ChipGroup: React.FC<PropsType> = React.memo(
  ({ options = [], value, defaultValue, onChange, multiple = false, horizontal = false, gap = 16 }) => {
    const [selected, setSelected] = useState<string[]>(() => {
      if (value !== undefined) {
        return Array.isArray(value) ? value : [value];
      }
      if (defaultValue !== undefined) {
        return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
      }
      return [];
    });
    // 同步外部受控值
    useEffect(() => {
      if (value !== undefined) {
        setSelected(Array.isArray(value) ? value : [value]);
      }
    }, [value]);
    // 切换选中
    const toggle = useCallback(
      (val: any) => {
        setSelected(prev => {
          let newSelected: string[];
          if (multiple) {
            newSelected = prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val];
          } else {
            newSelected = [val];
          }
          onChange?.(multiple ? newSelected : newSelected[0]);
          return newSelected;
        });
      },
      [multiple, onChange]
    );

    const renderChips = (optionList: PropsType['options']) =>
      optionList.map(opt => (
        <Chip
          id={opt.value}
          key={opt.value}
          label={opt.label}
          selected={selected.includes(opt.value)}
          onPress={toggle}
        />
      ));

    // 容器
    if (horizontal) {
      return (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: gap,
            gap: gap,
          }}
          style={styles.scrollView}
        >
          {renderChips(options)}
        </ScrollView>
      );
    } else {
      return <View style={[styles.view, { gap }]}>{renderChips(options)}</View>;
    }
  }
);

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 0,
  },
  view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export { ChipGroup };
