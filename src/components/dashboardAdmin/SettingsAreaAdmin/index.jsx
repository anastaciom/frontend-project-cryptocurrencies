import React from "react";
import Header from "./Header";
import Settings from "./Settings";

import { SettingsAreaAdminStyle } from "./style";

export default function SettingsArea() {
  return (
    <SettingsAreaAdminStyle>
     <Header/>
     <Settings/>
    </SettingsAreaAdminStyle>
  );
}
