// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      text: string;
      textMuted: string;
      textLight: string;
      primary: string;
      primaryStrong: string;
      accent: string;
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
