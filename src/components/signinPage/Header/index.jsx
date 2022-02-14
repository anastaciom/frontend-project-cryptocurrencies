import React from 'react'
import {HeaderStyle} from './style'
import BtnThemeSwitcher from '../../BtnThemeSwitcher';
import { Link } from 'react-router-dom';
import {ArrowBackIos} from '@mui/icons-material/';
export default function Header() {
  return (
    <HeaderStyle>
        <BtnThemeSwitcher/>
        <Link to='/'><span><ArrowBackIos style={{fontSize: 30}}/>Back to home</span></Link>
    </HeaderStyle>
  )
}
