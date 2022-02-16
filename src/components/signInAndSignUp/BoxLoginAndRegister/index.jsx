import React from "react";
import { BoxLoginAndRegisterStyle } from "./style";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import { Link } from "react-router-dom";
export default function BoxLogin({ title, link }) {
  return (
    <BoxLoginAndRegisterStyle>
      <h1>{title}</h1>

      {title === "Sign In" ? (
        <FormLogin title={title} />
      ) : (
        <FormRegister title={title} />
      )}

      {link === "Sign Up" ? (
        <p>
          Don't have an account? <Link to="/signUp">Sign Up</Link>
        </p>
      ) : (
        <p>
          Have an account? <Link to="/signIn">Sign In</Link>
        </p>
      )}
    </BoxLoginAndRegisterStyle>
  );
}
