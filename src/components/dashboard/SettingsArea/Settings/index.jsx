import React from "react";
import { SettingsStyle } from "./style";
import ThemeSwitch from "./ThemeSwitch";
import { useSelector } from "react-redux";

export default function Settings() {
  const {theme} = useSelector((state) => state.theme);
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
