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
    borderRadius: {
      small: string;
      normal: string;
    };
  }
}
