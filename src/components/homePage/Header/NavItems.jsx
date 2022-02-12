import React from "react";
import { HeaderItemsStyle } from "./style";
import { Link } from "react-router-dom";
export default function NavItems() {
  return (
    <HeaderItemsStyle>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className="btnSignIn">
          <Link to="/signin">Sign in</Link>
        </li>
      </ul>
    </HeaderItemsStyle>
  );
}
