import React from "react";
import MainArea from "../../components/dashboard/MainArea";
import SideBar from "../../components/dashboard/SideBar";
import { DashboardStyle } from "./index.style";
export default function DashboardPage() {
  return (
    <DashboardStyle>
      <SideBar />
      <MainArea />
    </DashboardStyle>
  );
}
