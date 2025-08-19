/** @format */

const defaultTheme = {
  colors: {
    /*基础色*/
    white: '#FFFFFF',
    black: '#000000',
    // 主品牌色
    // E7CDBB
    primaryLight: '#E7CDBB',
    // #9E6733
    primary: '#9E6733',
    /*功能色*/
    // #ED4432
    errorLight: '#ED4432',
    // D63D39
    error: '#D63D39',
    // #F5BF55
    warningLight: '#F5BF55',
    // #FF8742
    warning: '#FF8742',
    // #6FCABA
    successLight: '#6FCABA',
    // #35AD1B
    success: '#35AD1B',
    /*灰阶系统*/
    // #111111 最深灰
    gray900: '#111111',
    // #333333
    gray800: '#333333',
    // #666666
    gray600: '#666666',
    // #999999
    gray400: '#999999',
    // #CECECE
    gray300: '#CECECE',
    // #E7E7E7
    gray200: '#E7E7E7',
    // #F7F7F7
    gray100: '#F7F7F7',
    // #FAFAFA
    gray50: '#FAFAFA',
  },
  text: {
    size: {
      h1: 20,
      h2: 18,
      h3: 16,
      h4: 14,
      h5: 12,
      h6: 10,
    },
  },
  activity: {
    size: {
      small: 20,
      medium: 40,
      large: 60,
    },
    borderWidth: {
      small: 2,
      medium: 4,
      large: 6,
    },
  },
  space: {
    primary: 16,
    small: 8,
  },
  button: {
    variant: {
      primary: {
        text: '#E7CDBB',
        background: '#111111',
      },
      secondary: {
        text: '#333333',
        background: '#F8F1EB',
      },
      outline: {
        text: '#000000',
        background: undefined,
      },
      text: {
        text: '#000000',
        background: undefined,
      },
    },
    sizeStyle: {
      sm: {
        height: 30,
        width: 80,
        fontSize: 14,
      },
      md: {
        height: 38,
        width: 150,
        fontSize: 16,
      },
      lg: {
        height: 42,
        width: 200,
        fontSize: 18,
      },
    },
    borderRadius: 0,
  },
};

export { defaultTheme };
export type ThemeType = typeof defaultTheme;
