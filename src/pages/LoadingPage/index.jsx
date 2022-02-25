import React from "react";
import { FadeLoader } from "react-spinners/";
import {ContainerStyle} from './index.style'
export default function Loading({loading}) {
  return (
    <ContainerStyle>
      <FadeLoader
        color="#6A00FF"
        loading={loading}
        size={80}
      />
      <h1>Loading...</h1>
    </ContainerStyle>
  );
}
