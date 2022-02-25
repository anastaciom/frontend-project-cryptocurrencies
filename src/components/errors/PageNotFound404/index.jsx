import React from "react";
import { Link } from "react-router-dom";
import imgError from "../../assets/img404.png";
import {ErrorStyle}from './style'
export default function PageNotFound404() {
  return (
    <ErrorStyle>
      <h1>Page Not Found... :(</h1>
      <img src={imgError} alt="img404" />
      <Link to='/'>Back to home</Link>
    </ErrorStyle>
  )
}
