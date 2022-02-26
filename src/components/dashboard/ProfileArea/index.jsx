import React, { useState } from "react";
import Header from "../Header";
import InfoUser from "./InfoUser";
import InfoCrypto from "./InfoCrypto";
import { ProfileAreaStyle } from "./style";

export default function ProfileArea() {
  const [searchCrypto, setSearchCrypto] = useState("");
  return (
    <ProfileAreaStyle>
      <Header setSearchCrypto={setSearchCrypto} />
      <InfoUser />
      <InfoCrypto searchCrypto={searchCrypto} />
    </ProfileAreaStyle>
  );
}
