import { logActivity } from "../Utils/activityServices";

import homepageBg from "../assets/School-bg.jpg";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Info, Lock, Mail, UserPlus } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      await logActivity(auth.currentUser.uid, "User logged in successfully");
      setMessage("Logged in successfully🎉🎉");
      setTimeout(() => {
        setMessage("");
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      console.error("Login error:", err.code, err.message);

      if (err.code === "auth/user-not-found") {
        setErrors({ email: "No user found with this email" });
      } else if (
        err.code === "auth/wrong-password" ||
        err.code === "auth/invalid-credential"
      ) {
        setErrors({ password: "Incorrect password" });
      } else if (err.code === "auth/too-many-requests") {
        setErrors({
          email: "Too many failed attempts. Try again later.",
        });
      } else {
        setErrors({ email: "Failed to log in. Please try again." });
      }
    } finally {
      setLoading(false); // ✅ this always runs — even after an error
    }
  };

  return (
    <div
      className="min-h-screen bg-center relative
     flex justify-center items-center"
      style={{ backgroundImage: `url(${homepageBg})` }}
    >
      <div className="absolute inset-0 bg-white opacity-70"></div>
      {message && (
        <div
          className="absolute bg-black/30 inset-0 backdrop-blur-sm z-10
        transition-all duration-300"
        ></div>
      )}
      {message && (
        <div
          className="absolute bg-green-300 z-20 text-gray-700 border border-gray-300
        px-6 py-4 rounded-lg shadow-lg text-center animate-fade-in"
        >
          <p>{message}</p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-full z-10  mx-5 max-w-md bg-white py-4 px-6 text-gray-900 rounded shadow-2xl"
        // style={{ backgroundImage: `url(${loginImg})` }}
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
          <div className="">
            <h4 className="text-2xl font-bold lg:text-lg mb-1 text-[#663c00]">
              Notice:
            </h4>
            <p className="text-[12px] text-[#8e580d]">
              Enter the email address and password provided during sign-up, if
              you do not have an account, click on{" "}
              <strong className="">SIGN UP</strong>
            </p>
          </div>
        </div>

        <div className="relative">
          <h2 className="uppercase lg:text-lg lg:mb-1 font-bold mb-4">
            Log In
          </h2>
          <span
            type="button"
            className="absolute text-gray-950 font-bold p-1 right-1 top-0"
          >
            <Lock />
          </span>
        </div>

        <div className="relative">
          <label className="block mb-1">Email</label>
          <input
            onChange={handleChange}
            className="w-full text-gray-700 py-1 px-2 rounded mb-2 border-gray-700 border"
            type="email"
            value={formData.email}
            name="email"
            placeholder="Enter Your Email"
          />
          <p className="absolute right-3 top-8 text-gray-500">
            <Mail />
          </p>
          {errors.email && (
            <p className="text-red-300 text-sm mb-2">{errors.email}</p>
          )}
        </div>
        <div className="relative">
          <label className="block mb-1">Password</label>
          <input
            onChange={handleChange}
            value={formData.password}
            className="w-full text-gray-700 py-1 px-2 rounded lg:mb-2 mb-7 border border-gray-700"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Your Password"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          {errors.password && (
            <p className="text-red-300 text-sm mb-2">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 text-lg my-3 rounded text-white transition duration-500 ease-in-out ${
            loading
              ? "bg-[#0f9c37] cursor-not-allowed"
              : "bg-[#0f9c37] hover:bg-[#106e1d]"
          }`}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

        <div className="flex justify-between items-center gap-5 mt-4">
          <p className="mt-2 text-sm text-center">
            Don't have an account yet?{" "}
          </p>
          <div
            onClick={() => navigate("/signup")}
            className="flex items-center justify-between px-2 cursor-pointer md:max-w-40 lg:max-w-48
             w-full bg-[#17b6a4] rounded-lg py-2"
          >
            <button
              className="text-white text-lg font-bold flex
             rounded-md"
            >
              Sign Up
            </button>
            <span
              className="
             text-white font-bold"
            >
              <UserPlus />
            </span>
          </div>
        </div>

        <p className="text-center mb-4">
          <a
            href="/forgot-password"
            className="text-blue-700 hover:underline text-sm"
          >
            Forgot Password?
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
