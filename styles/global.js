import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    cursor: none;
    padding: 0;
    margin: 0;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: .3rem;
    background: url("../public/background.jpg");
    background-size: cover;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  a {
    cursor: none;
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  /* Custom Cursor */
  a:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 0px;
    left: 0%;
    background: black;
    transition: width 0.3s ease;
  }

  .cursor {
    z-index: 1;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 1px solid black;
    transition: all 200ms ease-out;
    position: fixed;
    pointer-events: none;
    left: 0;
    top: 0;
    transform: translate(calc(-50% + 15px), -50%);
  }

  .cursor2 {
    z-index: 2;
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: width 0.3s, height 0.3s, opacity 0.3s;
  }

  .cursorHover {
    background-color: ${(props) => props.theme.colors.primary};
    opacity: 0.8;
  }

  .cursorinnerhover {
    width: 50px;
    height: 50px;
    opacity: 0.5;
  }
  .expand {
    animation: cursorAnim .5s forwards;
  }
`;
export default GlobalStyle;
