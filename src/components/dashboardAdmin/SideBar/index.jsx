import React from "react";
import Title from "./Title";
import NavItems from "./NavItems";
import { SideBarStyle } from "./style";

export default function SideBar() {
  return (
    <SideBarStyle>
      <Title />
      <NavItems />
    </SideBarStyle>
  );
}
