import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import loginBgImg from "../assets/bg-logo.jpg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset link sent to your email ✅");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover"
      style={{ backgroundImage: `url(${loginBgImg})` }}
    >
      <form
        onSubmit={handleReset}
        className="w-full mx-5 max-w-md bg-gray-900 bg-opacity-80 text-white p-8 rounded-lg shadow-2xl"
      >
        <h2 className="text-3xl uppercase font-semibold mb-6">
          Reset Password
        </h2>

        <label className="block mb-1 text-lg">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 rounded text-gray-800 mb-5 border"
        />

        {message && <p className="text-green-400 mb-4">{message}</p>}
        {error && <p className="text-red-400 mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 hover:bg-blue-700 
          transition duration-500 ease-in-out text-xl text-white rounded"
        >
          Send Reset Link
        </button>

        <p className="mt-4 text-center text-sm">
          Remember your password?
          <a href="/login" className="text-blue-300 hover:underline ml-2">
            Go back to Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
