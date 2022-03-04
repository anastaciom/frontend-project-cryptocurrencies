import React from "react";
import { ContainerStyle } from "./index.style";
import { useSelector } from "react-redux";
export default function DashboardAdminPage() {
  const { users } = useSelector((state) => state.authAdmin);
  return (
    <ContainerStyle>
      {users.map((user, index) => (
        <li key={index}>{user.email}</li>
      ))}
    </ContainerStyle>
  );
}
