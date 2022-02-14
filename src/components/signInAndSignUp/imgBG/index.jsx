import React from "react";
import signInBg from "../../assets/signInBG.png";
import signUpBg from "../../assets/signUpBG.png";
import { BGStyle } from "./style";

export default function ImgBG({ title }) {
  return (
    <BGStyle src={title === "Sign In" ? signInBg : signUpBg} alt={title} />
  );
}
