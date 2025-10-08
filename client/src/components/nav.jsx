import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = ({ isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="text-white px-6 py-4 flex flex-wrap justify-between items-center shadow-lg backdrop-blur-sm">
      {/* Logo */}
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold tracking-wide mb-2 sm:mb-0 cursor-pointer"
      >
        ContentGuard AI
      </h1>

      {/* Links */}
      <ul className="flex flex-wrap justify-center sm:justify-end space-x-8 text-lg mb-2 sm:mb-0">
        <li className="hover:text-gray-300 cursor-pointer" onClick={() => navigate("/")}>Home</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Services</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        <li className="hover:text-gray-300 cursor-pointer">Upload</li>
      </ul>

      {/* Buttons */}
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-transparent text-white font-semibold px-4 py-1 rounded-full border border-white hover:bg-white hover:text-blue-800 transition-all shadow-md"
        >
          Logout
        </button>
      ) : (
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-transparent text-white font-semibold px-4 py-1 rounded-full border border-white hover:bg-white hover:text-blue-800 transition-all shadow-md"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-white text-blue-800 font-semibold px-4 py-1 rounded-full border border-white hover:bg-blue-800 hover:text-white transition-all shadow-md"
          >
            Signup
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
