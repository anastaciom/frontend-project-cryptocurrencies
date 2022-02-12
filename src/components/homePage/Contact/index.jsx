import React from "react";
import DivisionWaves from "./DivisionWaves";
import { ContactStyle } from "./style";
import { LinkedIn, GitHub, Email } from "@mui/icons-material/";
export default function Contact() {
  return (
    <ContactStyle>
      <DivisionWaves />
      <h1 id="contact">Contact</h1>
      <div>
        <a href="https://www.linkedin.com/in/anastacio-menezes-teixeira/">
          <LinkedIn style={{ fontSize: "90px", cursor: "pointer" }} />
        </a>
        <a href="https://github.com/anastaciom">
          <GitHub style={{ fontSize: "90px", cursor: "pointer" }} />
        </a>
        <a href="mailto:anastaciomenezes@outlook.com">
          <Email style={{ fontSize: "90px", cursor: "pointer" }} />
        </a>
      </div>
    </ContactStyle>
  );
}
