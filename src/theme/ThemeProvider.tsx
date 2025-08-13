/** @format */

import React, { createContext, useMemo } from 'react';
import { defaultTheme, type ThemeType } from './defaultTheme';
import { mergeDeep } from '../utils';

const ThemeContext = createContext(defaultTheme);

const ThemeProvider: React.FC<{
  theme?: Partial<ThemeType>;
  children: React.ReactNode;
}> = ({ theme = {}, children }) => {
  const mergedTheme = useMemo(() => mergeDeep(defaultTheme, theme), [theme]);
  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, ThemeContext };
