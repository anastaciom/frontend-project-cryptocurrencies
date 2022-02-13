import React, { useContext} from "react";
import { SwitchThemeStyle } from "./style";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { DarkMode, LightMode } from "@mui/icons-material/";

export default function SwitchTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <SwitchThemeStyle
      onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <DarkMode style={{ color: "#432a78" }} />
      ) : (
        <LightMode style={{ color: "yellow" }} />
      )}
    </SwitchThemeStyle>
  );
}
