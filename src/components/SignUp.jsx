import { useState } from "react";
import loginBgImg from "../assets/bg-logo.jpg";
import signUpImg from "../assets/signUp-bg.jpg";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Student",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  // Handle sign up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const { fullname, email, password, confirmPassword, role } = formData;

    // Validate password match
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      setLoading(false);
      return;
    }

    try {
      // Create user with Firebase Auth
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;

      // Save user info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullname,
        email,
        role,
        createdAt: new Date(),
      });

      // Send verification email
      await sendEmailVerification(user);

      alert(
        "✅ Account created! A verification email has been sent to your inbox. Please verify before signing in."
      );
      navigate("/login");
    } catch (err) {
      console.error("Signup Error:", err.message);
      setErrors({ general: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-contain flex justify-center items-center"
      style={{ backgroundImage: `url(${loginBgImg})` }}
    >
      <form
        onSubmit={handleSignUp}
        className="w-full mx-5 max-w-md bg-cover p-8 mt-5 text-white opacity-80 rounded shadow-2xl"
        style={{ backgroundImage: `url(${signUpImg})` }}
      >
        <h2 className="text-3xl uppercase font-semibold mb-6 text-center">
          Create Account
        </h2>

        {/* Full Name */}
        <label className="block mb-1 text-lg">Full Name</label>
        <input
          onChange={handleChange}
          value={formData.fullname}
          name="fullname"
          className="w-full text-red-700 text-sm p-2 rounded mb-5 border"
          type="text"
          placeholder="Enter Full Name"
          required
        />

        {/* Email */}
        <label className="block mb-1 text-lg">Email Address</label>
        <input
          value={formData.email}
          onChange={handleChange}
          name="email"
          className="w-full text-red-700 p-2 rounded mb-5 border"
          type="email"
          placeholder="Enter Email"
          required
        />
        {errors.email && (
          <p className="mb-2 text-sm text-red-300">{errors.email}</p>
        )}

        {/* Password */}
        <label className="block mb-1 text-lg">Create Password</label>
        <input
          onChange={handleChange}
          name="password"
          value={formData.password}
          className="w-full text-red-700 p-2 rounded mb-5 border"
          type="password"
          placeholder="Create New Password"
          required
        />

        {/* Confirm Password */}
        <label className="block mb-1 text-lg">Confirm Password</label>
        <input
          onChange={handleChange}
          value={formData.confirmPassword}
          name="confirmPassword"
          className="w-full text-red-700 p-2 rounded mb-5 border"
          type="password"
          placeholder="Confirm Password"
          required
        />
        {errors.confirmPassword && (
          <p className="mb-2 text-sm text-red-300">{errors.confirmPassword}</p>
        )}

        {/* Role */}
        <label className="block mb-1 text-lg">Role</label>
        <select
          value={formData.role}
          name="role"
          onChange={handleChange}
          className="w-full text-gray-700 p-2 rounded mb-5 border"
        >
          <option value="Admin">Admin</option>
          <option value="Lecturer">Lecturer</option>
          <option value="Student">Student</option>
        </select>

        {/* General Error */}
        {errors.general && (
          <p className="text-red-400 mb-4 text-center">{errors.general}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 text-xl rounded transition duration-500 ease-in-out text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-500 hover:bg-gray-700"
          }`}
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        {/* Sign In Link */}
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a
            onClick={() => navigate("/login")}
            className="text-blue-200 hover:underline ml-1 text-lg"
          >
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
