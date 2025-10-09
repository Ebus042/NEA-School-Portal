import React from "react";
import DashboardLayout from "./DashboardLayout";
import { adminActivities, adminStats } from "../../data";
import UserInfo from "./UserInfo";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid lg:grid-cols-4 gap-6 my-6">
        {adminStats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-gray-500 text-lg">{stat.title}</h2>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserInfo />
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

          <ul className="space-y-2 text-gray-600">
            {adminActivities.map((activity, i) => (
              <li key={i} className="border-b pb-2">
                {activity.recentAct}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
