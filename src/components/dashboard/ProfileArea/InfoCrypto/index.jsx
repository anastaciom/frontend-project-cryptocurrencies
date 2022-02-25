import React from "react";
import CryptoData from "./CryptoData";
import { InfoCryptoStyle } from "./style";
export default function InfoCrypto({ searchCrypto }) {
  return (
    <InfoCryptoStyle>
      <CryptoData searchCrypto={searchCrypto} />
    </InfoCryptoStyle>
  );
}
