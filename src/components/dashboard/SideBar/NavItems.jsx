import React from "react";
import { NavItemsStyle } from "./style";
import { Dashboard, Star, Settings } from "@mui/icons-material/";
import { Link } from "react-router-dom";
export default function NavItems() {
  return (
    <NavItemsStyle>
      <li>
        <Link to="profile"><Dashboard /><h4>Dashboard</h4> </Link>
      </li>
      <li>
        
        <Link to="favorites"><Star/><h4>Favorites</h4></Link>
      </li>
      <li>
        
        <Link to="settings"><Settings/><h4>Settings</h4></Link>
      </li>
    </NavItemsStyle>
  );
}
