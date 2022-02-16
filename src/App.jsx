import React from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./contexts/ThemeContext";
import { ThemeDark, ThemeLight } from "./components/themes";
import UsePersistedTheme from "./utils/UsePersistedTheme";
import AppRoutes from "./pages";


function App() {
  const [theme, toggleTheme] = UsePersistedTheme("theme", "initialTheme");
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? ThemeLight : ThemeDark}>
        <AppRoutes/>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
