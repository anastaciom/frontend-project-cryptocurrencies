import React from "react";
import { BoxLogoutStyle } from "./style";
import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/actions/logout.actions";
import { Logout } from "@mui/icons-material/";
export default function BoxLogout() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(logout());
  }

  return (
    <BoxLogoutStyle>
      <button onClick={handleClick}>
        <Logout style={{ fontSize: 25, paddingRight: 5 }} /> logout
      </button>
    </BoxLogoutStyle>
  );
}
