import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout, userData } = useAuth(); // 👈 use userData instead of currentUser
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-5">
        Hello, {userData?.fullname || "User"} Welcome to your {userData?.role}{" "}
        dashboard.
      </h1>
      <p className="text-lg mb-5">Role: {userData?.role}</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
