import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="lg:flex h-screen bg-gray-100">
      <SideBar />

      <div className="flex-1 flex flex-col">
        <TopBar />

        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
