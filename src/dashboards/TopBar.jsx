import React from "react";
import passportImg from "../assets/passport.png";
import { useAuth } from "../context/AuthContext";

const TopBar = () => {
  const { userData } = useAuth(); // 👈 use userData instead of currentUser

  return (
    <header className="flex flex-col lg:flex-row items-center justify-between px-6 py-1 mx-5 my-3">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
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
