import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/dashboard/SideBar";
import { DashboardStyle } from "./index.style";
export default function DashboardPage() {
  return (
    <DashboardStyle>
      <SideBar />
      <Outlet/>
    </DashboardStyle>
  );
}
