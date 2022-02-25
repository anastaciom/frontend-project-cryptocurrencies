import React from "react";
import PageNotFound404 from "../../components/errors/PageNotFound404";
import { ContainerStyle } from "./index.style";
export default function PageNotFound() {
  return (
    <ContainerStyle>
      <PageNotFound404 />
    </ContainerStyle>
  );
}
