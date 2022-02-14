import React from "react";
import { ContainerStyle} from "./index.style";
import Header from '../../components/signInAndSignUp/Header'
import BoxRegister from '../../components/signInAndSignUp/BoxLoginAndRegister'
import ImgBG from '../../components/signInAndSignUp/imgBG'
import FooterWaves from '../../components/signInAndSignUp/FooterWaves'

export default function SignUpPage() {
  return (
    <ContainerStyle>
      <Header/>
      <BoxRegister title={'Sign Up'}link={'Sign In'}/>
      <ImgBG title={'Sign Up'}/>
      <FooterWaves/>
    </ContainerStyle>
  );
}