import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return alert("Enter a username!");
    onLogin(username); // 👈 calls App’s login handler
  };

  return (
    <div className="flex justify-center items-center h-[80vh] text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="w-full p-3 mb-4 rounded-md border border-gray-300 text-black"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
