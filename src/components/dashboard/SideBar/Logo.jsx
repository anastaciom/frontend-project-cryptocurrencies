import React from "react";
import imgLogo from "../../assets/logo.png";
import { ImglogoStyle } from "./style";

export default function Logo() {
  return (
    <ImglogoStyle>
      <img src={imgLogo} alt="imgLogo" />
    </ImglogoStyle>
  );
}
