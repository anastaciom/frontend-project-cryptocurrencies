import React from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import { SideBarStyle } from "./style";

export default function SideBar() {
  return (
    <SideBarStyle>
      <Logo />
      <NavItems />
    </SideBarStyle>
  );
}
