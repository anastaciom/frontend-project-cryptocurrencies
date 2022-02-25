import React from "react";
import NotAuthorizated from "../../components/errors/NotAuthorizated";
import { ContainerStyle } from "./index.style";
export default function RouteNotAuthorizated() {
  return (
    <ContainerStyle>
      <NotAuthorizated />
    </ContainerStyle>
  );
}
