import React from "react";
import { BannerStyle } from "./style";
import Presentation from "./Presentation";
import ImgBackground from "./ImgBackground";

export default function Banner() {
  return (
    <BannerStyle>
      <Presentation/>
     <ImgBackground/>
    </BannerStyle>
  );
}
