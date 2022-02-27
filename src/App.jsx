import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ThemeLight, ThemeDark } from "./components/themes";
import AppRoutes from "./pages";

function App() {
  const {theme} = useSelector((state) => state.theme);
  return (
    <ThemeProvider
      theme={theme === "light" ? ThemeLight : theme === "dark" ? ThemeDark : ""}
    >
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
