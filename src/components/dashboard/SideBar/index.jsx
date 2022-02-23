import React from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import { SideBarStyle } from "./style";
import BtnTheme from "./ThemeSwitch";

export default function SideBar() {
  return (
    <SideBarStyle>
      <Logo />
      <NavItems />
      <BtnTheme/>
    </SideBarStyle>
  );
}
