import { ThemeProvider } from 'styled-components';
import usePersistedState from "../utils/usePersistedState"
import { useState } from 'react';

import GlobalStyle from "../styles/global";
import light from "../styles/themes/light"
import dark from "../styles/themes/dark"

import Meta from "../components/Meta";
import Menu from "../components/Menu"

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState("theme", light)

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light )
  }

  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <GlobalStyle />
      <Menu toggleTheme={toggleTheme}/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
