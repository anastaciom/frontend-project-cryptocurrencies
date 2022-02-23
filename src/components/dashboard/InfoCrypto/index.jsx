import React from "react";
import CryptoData from "./CryptoData";
import RecentResearches from "./RecentResearches";
import { InfoCryptoStyle } from "./style";
export default function InfoCrypto() {
  return (
    <InfoCryptoStyle>
     <CryptoData/>
      <RecentResearches />
    </InfoCryptoStyle>
  );
}
