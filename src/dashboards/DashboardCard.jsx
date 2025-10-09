import React from "react";
import { stats } from "../../data";

const DashboardCard = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-2">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl text-gray-400">{stat.title}</h2>
          <p className="text-xl font-semibold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;
