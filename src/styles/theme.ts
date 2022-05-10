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
  black: '#000000',
  darkTransparent: 'rgb(26, 27, 29, 0.9)',
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
    iconMuted: colors.gray4,
    iconClose: colors.black,
    iconCloseBg: colors.gray0,
    overlay: colors.darkTransparent,
    overlayLoader: colors.white,
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
  size: {
    xxs: '0.4rem',
    xs: '0.8rem',
    s: '1.6rem',
    m: '2.4rem',
    l: '3.2rem',
    xl: '4.0rem',
    xxl: '4.8rem',
    xxxl: '5.6rem',
  },
  mq: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
  },
  borderRadius: {
    small: '0.4rem',
    normal: '0.8rem',
  },
  layout: {
    maxWidth: '127.2rem',
  },
  transitionTime: '200ms',
};

export { theme };
