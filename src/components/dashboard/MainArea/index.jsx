import React from 'react'
import Header from '../Header'
import InfoUser from '../InfoUser'
import InfoCrypto from '../InfoCrypto'

import {MainAreaStyle} from './style'
export default function MainArea() {
  
  return (
    <MainAreaStyle>
     <Header/>
     <InfoUser/>
     <InfoCrypto/>
    </MainAreaStyle>
  )
}
