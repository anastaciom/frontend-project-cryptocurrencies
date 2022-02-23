import React from "react";
import { HeaderStyle } from "./style";
import SearchArea from "./SearchArea";
import NotificationArea from "./NotificationArea";

export default function Header() {
  return (
    <HeaderStyle>
      <SearchArea />
      <NotificationArea />
    </HeaderStyle>
  );
}
