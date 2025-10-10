import React, { useEffect, useState } from "react";
import { dashboardData } from "../../data";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import DashboardLayout from "../dashboards/DashboardLayout";
import UserInfo from "../dashboards/UserInfo";
import RecentActivity from "../dashboards/RecentActivity";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [roleContent, setRoleContent] = useState({ stats: [], activities: [] });

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (!userDoc.exists()) {
          alert("User data not found");
          return;
        }
        const data = userDoc.data();
        setUserData(data);

        // Get role-based stats and activities from data.js
        const role = data.role?.toLowerCase();
        setRoleContent(dashboardData[role] || dashboardData["student"]);

        setLoadingData(false);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();

    const logoutTimer = setTimeout(() => {
      logout();
      navigate("/login");
    }, 5000);
    return () => clearTimeout(logoutTimer);
  }, [user, navigate, logout]);
  // if (!user || loadingData)
  //   return <p className="text-center mt-20">Loading...</p>;

  return (
    <DashboardLayout>
      {/*Stats Card */}
      <div className="grid lg:grid-cols-4 gap-6 my-2">
        {roleContent.stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg text-gray-400">{stat.title}</h2>
            <p className="text-xl text-center font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* user info and activity */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserInfo user={userData} />
        <RecentActivity activities={roleContent.activities} />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
