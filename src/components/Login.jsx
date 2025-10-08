import loginImg from "../assets/login-bg.jpg";
import loginBgImg from "../assets/bg-logo.jpg";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSummit(e) {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  }

  return (
    <div
      className="min-h-screen bg-contain
     flex justify-center items-center"
      style={{ backgroundImage: `url(${loginBgImg})`, opacity: 0.9 }}
    >
      <form
        onSubmit={handleSummit}
        className="w-full mx-5 max-w-md bg-cover p-8 text-white rounded shadow-2xl"
        style={{ backgroundImage: `url(${loginImg})` }}
      >
        <h2 className="text-4xl uppercase font-semibold mb-6">Log In</h2>
        <label className="block mb-1 text-lg">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="w-full text-gray-700 p-2 rounded mb-5 border"
          type="email"
          value={email}
          required
          placeholder="Enter Your Email"
        />
        <label className="block mb-1 text-lg">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="w-full text-gray-700 p-2 rounded mb-5 border"
          type="password"
          required
          placeholder="Enter Your Password"
        />

        <button
          type="submit"
          className="w-full py-2 bg-gray-500 hover:bg-gray-700 
          transition duration-500 ease-in-out text-xl text-white rounded"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
