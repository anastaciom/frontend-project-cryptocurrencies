import React from "react";
import Header from "./Header";
import Settings from "./Settings";
import { SettingsAreaStyle } from "./style";

export default function SettingsArea() {
  return (
    <SettingsAreaStyle>
      <Header />
      <Settings />
    </SettingsAreaStyle>
  );
}
