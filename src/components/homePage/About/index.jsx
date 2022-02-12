import React from "react";
import Description from "./Description";
import DivisionWaves from "./DivisionWaves";
import { AboutStyle } from "./style";
export default function About() {
  return (
    <AboutStyle>
      <DivisionWaves/>
      <Description/>
    </AboutStyle>
  );
}
