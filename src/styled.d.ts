// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      text: string;
      textLight: string;
      muted: string;
      primary: string;
      primaryStrong: string;
      accent: string;
      inputBg: string;
      inputBorder: string;
      background: string;
      containerBg: string;
      iconMuted: string;
      iconClose: string;
      iconCloseBg: string;
      overlay: string;
    };
    font: {
      size: {
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
      };
    };
    size: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    mq: {
      tablet: string;
      desktop: string;
    };
    borderRadius: {
      small: string;
      normal: string;
    };
    layout: {
      maxWidth: string;
    };
    transitionTime: string;
  }
}
