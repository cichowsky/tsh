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
    line-height: normal;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.background};
  }

  body, a, button, input {
    font-family: 'Nunito', sans-serif;
  }

  button:not([disabled]), input[type="checkbox"] {
    cursor: pointer;
  }

  a {
    color: inherit;
  }

  label, input, button, p, a {
    font-size: ${({ theme }) => theme.font.size.xs};
    line-height: ${({ theme }) => theme.font.size.s};
  }
`;
