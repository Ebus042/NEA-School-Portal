import React, { useState } from "react";
import { menuItems } from "../../data";
import { LogOut, Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SideBar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      {/* ✅ Top bar for mobile */}
      <div className="flex items-center justify-between bg-gray-800 text-white p-4 lg:hidden">
        <h2 className="text-2xl font-bold">NEA Portal</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded hover:bg-gray-700"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* ✅ Sidebar */}
      <aside
        className={`fixed top-0 left-0 flex flex-col h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">NEA Portal</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-600 hover:text-red-500"
          >
            <X size={26} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              onClick={() => setIsOpen(false)}
              to={
                item.title === "Dashboard"
                  ? "/dashboard"
                  : `/dashboard/${item.title.toLowerCase()}`
              }
              end={item.title === "Dashboard"}
              className={({ isActive }) =>
                `flex items-center w-full p-2 rounded transition ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <span className="mr-3">{item.icon}</span>
              {item.title}
            </NavLink>
          ))}
        </nav>

        {/* ✅ Fixed Logout Button at Bottom */}
        <div className="my-auto mb-2">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white 
            p-4 w-full transition duration-300 rounded-md"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* ✅ Dim overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        ></div>
      )}
    </>
  );
};

export default SideBar;
