import React from "react";
import { NotificationAreaStyle } from "./style";
import {
  Notifications,
  KeyboardArrowDown,
  AccountCircle,
} from "@mui/icons-material/";


export default function NotificationArea() {
  return (
    <NotificationAreaStyle>
      <span>
        <Notifications />
      </span>
      <div>
        <AccountCircle style={{ fontSize: 50 }} />
        <KeyboardArrowDown style={{ fontSize: 18 }} />
      </div>
    </NotificationAreaStyle>
  );
}
