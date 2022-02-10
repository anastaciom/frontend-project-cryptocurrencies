import React from "react";
import { HeaderItemsStyle } from "./style";
import { Link } from "react-router-dom";
export default function NavItems() {
  return (
    <HeaderItemsStyle>
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li className="btnSignIn">
          <Link to="/signin">Sign in</Link>
        </li>
      </ul>
    </HeaderItemsStyle>
  );
}
