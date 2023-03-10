import usePersistedState from "../utils/usePersistedState";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import Menu from "../components/Layout/Menu";
import dynamic from "next/dynamic";
const Cursor = dynamic(() => import("../components/Cursor"), {
  ssr: false,
}) 

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Cursor />
      <Menu toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
