import React from "react";
import imgError from "../../assets/notAuthorizated.png";
import { ErrorStyle } from "./style";
import { Link } from "react-router-dom";
export default function NotAuthorizated() {
  return (
    <ErrorStyle>
      <div>
        <h1>Not Authorizated</h1>
        <Link to="/">Back to home</Link>
      </div>

      <img src={imgError} alt="imgError" />
    </ErrorStyle>
  );
}
