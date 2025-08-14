/** @format */

import React from 'react';
import type { TextStyle } from 'react-native';
import createIconSet from '@react-native-vector-icons/icomoon';
import icoMoonConfig from '../../assets/selection.json';
import { type ThemeType, useTheme } from '../../theme';
import type IconNameList from '../../assets/IconNameList';

export type IconName = (typeof IconNameList)[number];

const IcoMoonIcon = createIconSet(icoMoonConfig, 'MicasIcon', 'MicasIcon.ttf');

type colorType = keyof ThemeType['colors'];
type PropsType = {
  name: IconName;
  size?: number;
  color?: colorType | string;
  style?: TextStyle;
};

const Icon: React.FC<PropsType> = ({ name, size, color = 'black', style }) => {
  const theme = useTheme();
  const iconColor = theme?.colors?.[color as colorType] ?? color;
  return <IcoMoonIcon name={name} size={size} color={iconColor} style={style} />;
};

export { Icon };
