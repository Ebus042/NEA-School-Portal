// src/components/RecentActivities.jsx
import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db, auth } from "../firebase";

const RecentActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const userId = auth.currentUser?.uid;
    if (!userId) return;

    // Query activities for this user, ordered by timestamp descending
    const q = query(
      collection(db, "activities"),
      where("userId", "==", userId),
      orderBy("timestamp", "desc")
    );

    // Listen in real-time
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setActivities(data);
      },
      (err) => {
        console.error("Failed to fetch activities:", err);
      }
    );

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h2 className="text-lg font-bold mb-3">Recent Activities</h2>
      <ul className="text-sm space-y-2">
        {activities.length > 0 ? (
          activities.map((act) => (
            <li key={act.id} className="border-b pb-1">
              <span className="font-medium">{act.action}</span>
              <br />
              <span className="text-gray-500 text-xs">
                {act.timestamp?.toDate().toLocaleString()}
              </span>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No recent activities yet.</p>
        )}
      </ul>
    </div>
  );
};

export default RecentActivities;
