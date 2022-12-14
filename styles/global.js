import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Neue Montreal';
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
