import React, { useContext } from "react";
import { ThemeSwitchStyle } from "./style";
import { ThemeContext } from "../../contexts/ThemeContext";
import { DarkMode, LightMode } from "@mui/icons-material/";
import UsePersistedTheme from "../../utils/UsePersistedTheme";

export default function SwitchTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  UsePersistedTheme("theme", theme);
  return (
    <ThemeSwitchStyle
      onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <DarkMode style={{ color: "#432a78" }} />
      ) : (
        <LightMode style={{ color: "yellow" }} />
      )}
    </ThemeSwitchStyle>
  );
}
