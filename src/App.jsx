import React, { useState} from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { ThemeProvider} from "styled-components";
import {ThemeContext } from './contexts/ThemeContext'
import { ThemeDark, ThemeLight } from "./components/themes";

function App() {
  const [theme, toggleTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? ThemeLight : ThemeDark}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
