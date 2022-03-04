import React from "react";
import { HeaderStyle } from "./style";
import SearchArea from "./SearchArea";
import NotificationArea from "./NotificationArea";

export default function Header({setSearchUser}) {
  return (
    <HeaderStyle>
      <SearchArea setSearchUser={setSearchUser}/>
      <NotificationArea />
    </HeaderStyle>
  );
}
