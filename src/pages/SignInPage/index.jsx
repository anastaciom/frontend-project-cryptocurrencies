import React from "react";
import { ContainerStyle } from "./index.style";
import Header from "../../components/signInAndSignUp/Header";
import BoxLogin from "../../components/signInAndSignUp/BoxLoginAndRegister";
import ImgBG from "../../components/signInAndSignUp/imgBG";
import FooterWaves from "../../components/signInAndSignUp/FooterWaves";

export default function SignInPage() {
  return (
    <ContainerStyle>
      <Header />
      <BoxLogin title={"Sign In"} link={"Sign Up"} />
      <ImgBG title={"Sign In"} />
      <FooterWaves />
    </ContainerStyle>
  );
}
