import React from "react";
import Logo from "../../../assets/logo.png";
import NavItems from "./NavItems";
import { HeaderStyle } from "./style";
import SwitchTheme from "../../BtnThemeSwitcher";

export default function Header() {
  return (
    <HeaderStyle>
      <SwitchTheme/>
      <img src={Logo} alt="logo" />
      <NavItems />
    </HeaderStyle>
  );
}
