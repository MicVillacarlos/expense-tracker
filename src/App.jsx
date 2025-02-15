import { ThemeProvider } from "styled-components";
import "./App.css";
import Home from "./pages/home/Home";
import {GlobalStyles, darkTheme} from "./theme/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
