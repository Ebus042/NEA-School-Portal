import React from "react";
import DashboardLayout from "./DashboardLayout";
import DashboardCard from "./DashboardCard";
import UserInfo from "./UserInfo";
import RecentActivity from "./RecentActivity";

const StudentDashboard = () => {
  return (
    <DashboardLayout>
      <DashboardCard />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserInfo />
        <RecentActivity />
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
