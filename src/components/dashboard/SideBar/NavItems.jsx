import React from "react";
import { NavItemsStyle } from "./style";
import { Dashboard, Star, Settings } from "@mui/icons-material/";
export default function NavItems() {
  return (
    <NavItemsStyle>
      <li>
        <Dashboard style={{marginRight: 10}}/> Dashboard
      </li>
      <li>
        <Star style={{marginRight: 10}}/>
        Favorites
      </li>
      <li>
        <Settings style={{marginRight: 10}}/>
        Settings
      </li>
    </NavItemsStyle>
  );
}
