import React, { useEffect, useState } from "react";
import { dashboardData } from "../../data";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  getDoc,
  doc,
  collection,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { logActivity } from "../Utils/activityServices";
import UserInfo from "../dashboards/UserInfo";
import RecentActivity from "../dashboards/RecentActivity";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [activities, setActivities] = useState([]); // ✅ new state
  const [roleContent, setRoleContent] = useState({ stats: [], activities: [] });
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // 🔥 Main useEffect
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (auth.currentUser) {
      logActivity(auth.currentUser.uid, "Opened Dashboard");
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

        // role-based dashboard stats
        const role = data.role?.toLowerCase();
        setRoleContent(dashboardData[role] || dashboardData["student"]);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();

    // 🟢 Step (c): Real-time activity listener
    const q = query(
      collection(db, "activities"),
      where("userId", "==", user.uid),
      orderBy("timestamp", "desc"),
      limit(5)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedActivities = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setActivities(fetchedActivities);
    });

    const logoutTimer = setTimeout(() => {
      logout();
      navigate("/login");
    }, 300000);

    // Cleanup
    return () => {
      clearTimeout(logoutTimer);
      unsubscribe();
    };
  }, [user, navigate, logout]);

  return (
    <div className="mb-32">
      {/* Stats */}
      <div className="grid lg:grid-cols-4 gap-6 mx-5 my-2">
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

      {/* User Info + Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-5 gap-6">
        <UserInfo user={userData} />
        {/* ✅ Use real activities from Firestore */}
        <RecentActivity activities={activities} />
      </div>
    </div>
  );
};

export default Dashboard;
