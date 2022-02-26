import React, { useState } from "react";
import { NotificationAreaStyle } from "./style";
import {
  Notifications,
  KeyboardArrowDown,
  AccountCircle,
} from "@mui/icons-material/";
import BoxLogout from "./BoxLogout";
import BoxNotifications from "./BoxNotifications";

export default function NotificationArea() {
  const [boxUser, setBoxUser] = useState(false);
  const [boxNotifications, setBoxNotifications] = useState(false);

  function handleBoxUser() {
    boxUser === false ? setBoxUser(true) : setBoxUser(false);
    setBoxNotifications(false);
  }

  function handleBoxNotifications() {
    boxNotifications === false
      ? setBoxNotifications(true)
      : setBoxNotifications(false);
    setBoxUser(false);
  }
  return (
    <>
      <NotificationAreaStyle>
        <span onClick={handleBoxNotifications}>
          <Notifications />
        </span>
        <div onClick={handleBoxUser}>
          <AccountCircle style={{ fontSize: 50 }} />
          <KeyboardArrowDown style={{ fontSize: 18 }} />
        </div>
      </NotificationAreaStyle>
      {boxNotifications ? <BoxNotifications /> : ""}
      {boxUser ? <BoxLogout /> : ""}
    </>
  );
}
