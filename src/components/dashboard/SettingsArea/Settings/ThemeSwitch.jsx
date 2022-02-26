import React, { useContext } from "react";
import { ThemeSwitchStyle } from "./style";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import UsePersistedTheme from "../../../../utils/UsePersistedTheme";
import Switch from "react-switch";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  UsePersistedTheme("theme", theme);
  return (
    <ThemeSwitchStyle>
      <Switch
        onChange={() => toggleTheme(theme === "light" ? "dark" : "light")}
        checked={theme === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={50}
        handleDiameter={30}
        onColor="#432A78"
        offColor="#553d89"
        offHandleColor="#432A78"
        onHandleColor="#553d89"
      />
    </ThemeSwitchStyle>
  );
}
