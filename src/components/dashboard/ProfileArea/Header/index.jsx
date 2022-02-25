import React from "react";
import { HeaderStyle } from "./style";
import SearchArea from "./SearchArea";
import NotificationArea from "./NotificationArea";

export default function Header({ setSearchCrypto }) {
  return (
    <HeaderStyle>
      <SearchArea setSearchCrypto={setSearchCrypto} />
      <NotificationArea />
    </HeaderStyle>
  );
}
