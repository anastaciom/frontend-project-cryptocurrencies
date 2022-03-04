import React from "react";
import { DashboardStyle} from "./index.style";
import { Outlet } from "react-router-dom";
import SideBar from '../../components/dashboardAdmin/SideBar'
export default function DashboardAdminPage() {
  return (
    <DashboardStyle>
      <SideBar/>
      <Outlet/>
    </DashboardStyle>
  );
}
