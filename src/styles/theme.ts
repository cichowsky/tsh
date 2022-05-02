import { DefaultTheme } from 'styled-components';

const colors = {
  blue1: '#4460F7',
  blue2: '#2140E8',
  orange: '#F9A52B',
  white: '#FFFFFF',
  gray1: '#F0F1F5',
  gray2: '#E0E2EA',
  gray3: '#B9BDCF',
  gray4: '#9194A5',
  gray5: '#1A1B1D',
};

const theme: DefaultTheme = {
  color: {
    text: colors.gray5,
    textMuted: colors.gray4,
    textLight: colors.white,
    primary: colors.blue1,
    primaryStrong: colors.blue2,
    accent: colors.orange,
  },
  font: {
    size: {
      xs: '1.4rem',
      s: '1.6rem',
      m: '1.8rem',
      l: '2.4rem',
      xl: '3.0rem',
    },
  },
  borderRadius: {
    small: '0.4rem',
    normal: '0.8rem',
  },
};

export { theme };
