import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.text};
  }

  body, a, button, input {
    font-family: 'Nunito', sans-serif;
  }

  button, a {
    cursor: pointer;
  }
`;
