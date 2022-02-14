import React from "react";
import { ContainerStyle} from "./index.style";
import Header from '../../components/signinPage/Header'
import BoxLogin from '../../components/signinPage/BoxLogin'
import ImgBG from '../../components/signinPage/imgBG'
import FooterWaves from '../../components/signinPage/FooterWaves'
export default function SignInPage() {
  return (
    <ContainerStyle>
      <Header/>
      <BoxLogin/>
      <ImgBG/>
      <FooterWaves/>
    </ContainerStyle>
  );
}
