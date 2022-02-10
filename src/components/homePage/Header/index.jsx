import React from "react";
import Logo from "../../assets/logo.png";
import NavItems from "./NavItems";
import { HeaderStyle } from "./style";
export default function Header() {
  return (
    <HeaderStyle>
      <img src={Logo} alt="logo" />
      <NavItems />
    </HeaderStyle>
  );
}
