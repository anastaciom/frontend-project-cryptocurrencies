import React, { useState } from "react";
import { HeaderItemsStyle, BtnMenuMobileStyle } from "./style";
import { Link } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material/";
export default function NavItems() {
  const [menuMobile, setMenuMobile] = useState(false);

  function handleClick() {
    menuMobile ? setMenuMobile(false) : setMenuMobile(true);
  }

  return (
    <>
      <BtnMenuMobileStyle onClick={handleClick}>
        {menuMobile ? <Close /> : <Menu />}
      </BtnMenuMobileStyle>

      <HeaderItemsStyle>
        <ul className={menuMobile ? "active" : ""}>
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
    </>
  );
}
