import loginImg from "../assets/login-bg.jpg";
import loginBgImg from "../assets/bg-logo.jpg";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
      alert("Login successfully");
      navigate("/dashboard");
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
      className="min-h-screen bg-contain
     flex justify-center items-center"
      style={{ backgroundImage: `url(${loginBgImg})`, opacity: 0.9 }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full mx-5 max-w-md bg-cover p-8 text-white rounded shadow-2xl"
        style={{ backgroundImage: `url(${loginImg})` }}
      >
        <h2 className="text-4xl uppercase font-semibold mb-6">Log In</h2>
        <label className="block mb-1 text-lg">Email</label>
        <input
          onChange={handleChange}
          className="w-full text-gray-700 p-2 rounded mb-5 border"
          type="email"
          value={formData.email}
          name="email"
          placeholder="Enter Your Email"
        />
        {errors.email && (
          <p className="text-red-300 text-sm mb-2">{errors.email}</p>
        )}

        <label className="block mb-1 text-lg">Password</label>
        <input
          onChange={handleChange}
          value={formData.password}
          className="w-full text-gray-700 p-2 rounded mb-5 border"
          type="password"
          name="password"
          placeholder="Enter Your Password"
        />
        {errors.password && (
          <p className="text-red-300 text-sm mb-2">{errors.password}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-xl text-white transition duration-500 ease-in-out ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-500 hover:bg-gray-700"
          }`}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

        <p className="mt-4 text-sm text-center">
          Don't have an account yet?
          <a
            href="/signup"
            className="text-blue-100 hover:underline ml-4 text-lg"
          >
            Sign Up
          </a>
        </p>

        <p className="text-center mb-4">
          <a
            href="/forgot-password"
            className="text-blue-200 hover:underline text-sm"
          >
            Forgot Password?
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
