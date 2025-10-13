import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgottenPassword";
import Profile from "./pages/Profile";
import DashboardLayout from "./dashboards/DashboardLayout";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Dashboard Route */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {/* Nested Routes - these display inside DashboardLayout */}
          <Route index element={<Dashboard />} /> {/* Default page */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          {/* You can add more later like settings */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
