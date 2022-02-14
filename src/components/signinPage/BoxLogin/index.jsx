import React from "react";
import { BoxLoginStyle } from "./style";
import { Link } from "react-router-dom";
export default function BoxLogin() {
  return (
    <BoxLoginStyle>
      <h1>Sign in</h1>
      <form method="post">
        <input type="email" name="" id="" placeholder="E-mail" />
        <input type="password" name="" id="" placeholder="Password" />
        <button type="submit">Sign in</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </BoxLoginStyle>
  );
}
