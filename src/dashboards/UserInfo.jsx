import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"; // You already have this in your project
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const UserInfo = () => {
  const { currentUser } = useAuth(); // Logged-in user from Firebase Auth
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!currentUser) return;

      try {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserData();
  }, [currentUser]);

  if (!userData) {
    return (
      <div className="bg-white p-6 rounded-xl shadow mb-6 text-gray-500">
        Loading user info...
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">User Info</h2>

      <ul className="space-y-4 text-gray-900">
        <li>
          <strong>Name:</strong> {userData.fullname}
        </li>
        <li>
          <strong>Role:</strong> {userData.role}
        </li>

        {/* Show Student fields */}
        {userData.role === "Student" && (
          <>
            <li>
              <strong>Department: </strong> {userData.department || "N/A"}
            </li>
            <li>
              <strong>Level: </strong> {userData.level || "N/A"}
            </li>
            <li>
              <strong>Student ID: </strong>{" "}
              {userData.studentId.toUpperCase() || "N/A"}
            </li>
          </>
        )}

        {/* Show Staff fields */}
        {userData.role === "Staff" && (
          <>
            <li>
              <strong>Staff ID:</strong>{" "}
              {userData.staffId.toUpperCase() || "N/A"}
            </li>
            <li>
              <strong>Position:</strong> {userData.position || "N/A"}
            </li>
          </>
        )}

        {/* Show Admin fields */}
        {userData.role === "Admin" && (
          <li>
            <strong>Admin ID:</strong> {userData.adminId || "N/A"}
          </li>
        )}
      </ul>
    </div>
  );
};

export default UserInfo;
