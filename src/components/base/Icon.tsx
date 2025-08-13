/** @format */

import React from 'react';
import type { TextStyle } from 'react-native';
import createIconSet from '@react-native-vector-icons/icomoon';
import icoMoonConfig from '../../assets/selection.json';
import { type ThemeType, useTheme } from '../../theme';

const IconNameList = ['add', 'address', 'bag', 'bag-add', 'bank-card', 'back', 'check', 'check-circle', 'checkbox', 'checkbox-marked', 'checkbox-marked-filled', 'clock', 'close', 'close-circle', 'down', 'email', 'eye-invisible', 'faq', 'filter', 'garbage', 'gift', 'heart', 'heart-filled', 'help-circle', 'info', 'info-circle', 'klarna', 'left-circle', 'left', 'left-top', 'minus', 'next', 'prev', 'product-return', 'radio', 'radio-marked', 'right', 'right-circle', 'ruler', 'search', 'service', 'setting',] as const;
type IconName = typeof IconNameList[number];

const IcoMoonIcon = createIconSet(icoMoonConfig, 'MicasIcon', 'MicasIcon.ttf');

type colorType = keyof ThemeType['colors'];
type PropsType = {
  name: IconName;
  size?: number;
  color?: colorType;
  style?: TextStyle;
};

const Icon: React.FC<PropsType> = ({ name, size, color, style }) => {
  const theme = useTheme();
  const iconColor = theme?.colors?.[color as colorType] ?? color;
  return <IcoMoonIcon name={name} size={size} color={iconColor} style={style} />;
};

export { Icon, IconNameList };
