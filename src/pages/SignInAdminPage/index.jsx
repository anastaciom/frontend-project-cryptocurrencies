import React from 'react'
import { ContainerStyle } from './index.style'
import Header from '../../components/signInAdmin/Header'
import FooterWaves from '../../components/signInAdmin/FooterWaves'
import BoxLogin from '../../components/signInAdmin/BoxLogin'
import ImgBG from '../../components/signInAdmin/imgBG'
export default function SignInAdminPage() {
  return (
    <ContainerStyle>
      <Header/>
      <BoxLogin/>
      <ImgBG/>
      <FooterWaves/>
    </ContainerStyle>
  )
}
