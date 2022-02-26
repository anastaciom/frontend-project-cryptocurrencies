import React, { useContext } from "react";
import { SettingsStyle } from "./style";
import ThemeSwitch from "./ThemeSwitch";
import { ThemeContext } from "../../../../contexts/ThemeContext";

export default function Settings() {
  const { theme } = useContext(ThemeContext);
  return (
    <SettingsStyle>
      <h1>Settings</h1>
      <ul>
        <li>
          Theme: {theme} <ThemeSwitch />
        </li>
      </ul>
    </SettingsStyle>
  );
}
