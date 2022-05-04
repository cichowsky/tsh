import { DefaultTheme } from 'styled-components';

const colors = {
  blue1: '#4460F7',
  blue2: '#2140E8',
  orange: '#F9A52B',
  white: '#FFFFFF',
  gray0: '#F8F8FA',
  gray1: '#F0F1F5',
  gray2: '#E0E2EA',
  gray3: '#B9BDCF',
  gray4: '#9194A5',
  gray5: '#1A1B1D',
};

const theme: DefaultTheme = {
  color: {
    text: colors.gray5,
    textLight: colors.white,
    muted: colors.gray4,
    primary: colors.blue1,
    primaryStrong: colors.blue2,
    accent: colors.orange,
    inputBg: colors.white,
    inputBorder: colors.gray2,
    background: colors.gray0,
    containerBg: colors.white,
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
  layout: {
    maxWidth: '127.2rem',
  },
  mq: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
  },
};

export { theme };
