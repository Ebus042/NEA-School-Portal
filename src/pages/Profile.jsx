import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase";
import passportimg from "../assets/Passport.png";

const Profile = () => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false); // ✨ edit mode
  const [newFullname, setNewFullname] = useState(""); // ✨ new name input
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    const fetchUserData = async () => {
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setUserData(data);
          setNewFullname(data.fullname || "");
        } else {
          console.log("User document not found");
        }
        setLoading(false);
      } catch (error) {
        console.error("error fetching user data", error);
      }
    };
    fetchUserData();
  }, [user, navigate]);

  const handleSave = async () => {
    // Capitalize first letters before saving
    const formattedName = newFullname
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, { fullname: formattedName });

    // Update on screen
    setUserData((prev) => ({ ...prev, fullname: formattedName }));
    setIsEditing(false);
  };

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>

      <div className="bg-white p-6 shadow-md rounded-lg mx-auto max-w-sm">
        <img
          src={userData?.photoURL || passportimg}
          className="w-32 h-32 rounded-full mx-auto mb-4"
          alt="user profile"
        />

        {/* View Mode */}
        {!isEditing ? (
          <>
            <h3 className="text-center font-semibold text-xl">
              {userData?.fullname
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ") || "No Name"}
            </h3>
            <p className="text-gray-600 text-center">
              {userData?.email || user?.email}
            </p>

            <p className="text-center mt-2 text-sm text-gray-500">
              Role: {userData?.role || "N/A"}
            </p>

            <div className="mt-4 text-center">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Edit Profile
              </button>
            </div>
          </>
        ) : (
          // ✨ Edit Mode
          <>
            <input
              type="text"
              value={newFullname}
              onChange={(e) => setNewFullname(e.target.value)}
              className="border p-2 rounded w-full mb-2"
              placeholder="Enter full name"
            />
            <button
              onClick={handleSave}
              className="w-full bg-green-500 text-white py-2 rounded-md mb-2"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="w-full bg-gray-400 text-white py-2 rounded-md"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
