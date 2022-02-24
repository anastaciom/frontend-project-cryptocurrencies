import React from "react";
import CryptoData from "./CryptoData";
import NewsArea from "./NewsArea";
import { InfoCryptoStyle } from "./style";
export default function InfoCrypto() {
  return (
    <InfoCryptoStyle>
     <CryptoData/>
      <NewsArea />
    </InfoCryptoStyle>
  );
}
