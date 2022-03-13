import React from "react";
import { InfoUserStyle } from "./style";
import { useSelector } from "react-redux";
export default function InfoUser() {
  const UserData = useSelector((state) => state.auth.data.user.name);
  return <InfoUserStyle>Hi, {UserData}</InfoUserStyle>;
}
