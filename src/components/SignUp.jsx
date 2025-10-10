import { useState } from "react";
import homepageBg from "../assets/School-bg.jpg";
import signUpImg from "../assets/signUp-bg.jpg";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { UserPlus, Info } from "lucide-react";

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
      className="min-h-screen bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${homepageBg})` }}
    >
      <form
        onSubmit={handleSignUp}
        className="w-full mx-5 max-w-md bg-white p-8 mt-5  text-gray-900 rounded shadow-2xl"
        // style={{ backgroundImage: `url(${signUpImg})` }}
      >
        <h2 className="text-center mb-1 font-bold uppercase text-xl">
          Admission Portal
        </h2>

        <div
          className="bg-[#ffaa33] mb-8 shadow-md border-l-[#ff9500] border-l-4
         px-4 py-4 flex justify-between gap-5 items-center rounded-md "
        >
          <span className="text-[#663c00]">
            <Info size={50} />
          </span>

          <div>
            <h4 className="text-2xl lg:text-lg mb-3 font-semibold">Notice:</h4>
            <p className="text-[12px] text-[#8e580d]">
              Sign up with your information as shown on your certificate
            </p>
          </div>
        </div>

        <h2 className="text-xl uppercase font-semibold mb-2 text-center">
          Create Account
        </h2>

        {/* Full Name */}
        <label className="block mb-1">Full Name</label>
        <input
          onChange={handleChange}
          value={formData.fullname}
          name="fullname"
          className="w-full text-red-700 text-sm py-1 px-2 rounded mb-2 border border-gray-700"
          type="text"
          placeholder="Enter Full Name"
          required
        />

        {/* Email */}
        <label className="block mb-1">Email Address</label>
        <input
          value={formData.email}
          onChange={handleChange}
          name="email"
          className="w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700"
          type="email"
          placeholder="Enter Email"
          required
        />
        {errors.email && (
          <p className="mb-2 text-sm text-red-300">{errors.email}</p>
        )}

        {/* Password */}
        <label className="block mb-1">Create Password</label>
        <input
          onChange={handleChange}
          name="password"
          value={formData.password}
          className="w-full text-red-700 px-2 py-1 rounded mb-2 border border-gray-700"
          type="password"
          placeholder="Create New Password"
          required
        />

        {/* Confirm Password */}
        <label className="block mb-1">Confirm Password</label>
        <input
          onChange={handleChange}
          value={formData.confirmPassword}
          name="confirmPassword"
          className="w-full text-red-700 py-1 px-2 rounded mb-2 border border-gray-700"
          type="password"
          placeholder="Confirm Password"
          required
        />
        {errors.confirmPassword && (
          <p className="mb-2 text-sm text-red-300">{errors.confirmPassword}</p>
        )}

        {/* Role */}
        <label className="block mb-1">Role</label>
        <select
          value={formData.role}
          name="role"
          onChange={handleChange}
          className="w-full text-gray-700 py-1 px-2 rounded mb-2 border border-gray-700"
        >
          <option value="Admin">Admin</option>
          <option value="Staff">Staff</option>
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
          className={`w-full py-1 px-2 rounded mt-5 transition duration-500 ease-in-out text-white ${
            loading
              ? "bg-[#0f9c37] cursor-not-allowed"
              : "bg-[#0f9c37] hover:bg-[#106e1d] font-bold"
          }`}
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        {/* Sign In Link */}
        <div className="flex justify-between items-center gap-5 mt-4">
          <p className="mt-4 text-center lg:text-sm">
            Already have an account?{" "}
          </p>
          <div
            onClick={() => navigate("/login")}
            className="flex items-center cursor-pointer md:max-w-40 lg:max-w-48
             w-full bg-[#17b6a4] rounded-lg py-2"
          >
            <button
              className="text-white text-lg relative font-bold flex
             rounded-md ml-4 "
            >
              Sign In
            </button>
            <span
              className="absolute right-16  md:right-[29%] lg:right-[36%]
             text-white font-bold"
            >
              <UserPlus />
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
