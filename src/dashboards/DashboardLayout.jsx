import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  return (
    <div className="lg:flex h-screen bg-gray-100">
      <SideBar />

      <div className="flex-1 flex flex-col">
        <TopBar />

        <main className="flex-1 overflow-y-auto">{children}</main>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
