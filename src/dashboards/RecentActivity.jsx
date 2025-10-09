const RecentActivity = ({ activities }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
      <ul className="space-y-2 text-gray-500">
        {activities.map((activity, i) => (
          <li key={i} className="border-b pb-2">
            {activity.recentAct}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
