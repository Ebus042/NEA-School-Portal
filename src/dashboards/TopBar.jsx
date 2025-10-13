import passportImg from "../assets/passport.png";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

const TopBar = () => {
  const { userData } = useAuth(); // 👈 use userData instead of currentUser
  const location = useLocation();

  const path = location.pathname.split("/").pop();

  const pageTitle =
    path === "dashboard" || path === ""
      ? "Dashboard"
      : path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <header className="flex flex-col lg:flex-row items-center justify-between px-6 py-1 mx-5 my-3">
      <h2 className="text-3xl font-semibold text-red-500">{pageTitle}</h2>
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold mb-5 capitalize">
          Hello, {userData?.fullname || "User"}
        </h1>

        {/* <p>Welcome 👋 Ebuka</p> */}
        <figure className="items-center mb-5">
          <img
            src={passportImg}
            alt="user"
            className="w-16 h-16 border rounded-full"
          />
          <figcaption className="text-center mt-4 uppercase font-semibold text-sm">
            {userData?.role}
          </figcaption>
        </figure>
      </div>
    </header>
  );
};

export default TopBar;
