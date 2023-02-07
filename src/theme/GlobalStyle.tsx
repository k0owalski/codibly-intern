import { createGlobalStyle } from 'styled-components';

import PoppinsRegular from 'assets/fonts/Poppins-Regular.woff2';
import PoppinsMedium from 'assets/fonts/Poppins-Medium.woff2';
import PoppinsSemiBold from 'assets/fonts/Poppins-SemiBold.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    src: url("${PoppinsRegular}");
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 500;
    src: url("${PoppinsMedium}");
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 600;
    src: url("${PoppinsSemiBold}");
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Poppins';

    color: #1a1a1a;
    background-color: #fafafa;
  }

  a {
    text-decoration: none;
    color: inherit;

    cursor: pointer;
  }

  button, input {
    background: transparent;
    border: none;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
  }
`;

export default GlobalStyle;
