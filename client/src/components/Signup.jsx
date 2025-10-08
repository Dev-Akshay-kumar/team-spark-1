import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import getGoogleAuthUrl from "../utils/getGoogleAuthUrl";

const Signup = ({ onSignup, isLoggedIn }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: Replace 'alert' with a custom modal in production apps.
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }
    // Simulate signup
    onSignup(formData.name);
  };

  return (
    // 1. Outermost section is transparent
    <section className="py-10 px-6 text-gray-800 dark:text-white bg-transparent">
      
      {/* 2. Card background is fully transparent */}
      
      <div className="max-w-md mx-auto border border-white-500/50 rounded-lg p-8 bg-gray-900/50">
        <h2 className="text-2xl font-bold text-center mb-6 text-black dark:text-white">
          {isLoggedIn ? "You're already signed in" : "Create an Account"}
        </h2>

        {!isLoggedIn ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* 3. Input set to fully transparent (bg-transparent) */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-transparent" 
              value={formData.name}
              onChange={handleChange}
            />
            
            {/* 3. Input set to fully transparent (bg-transparent) */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-transparent" 
              value={formData.email}
              onChange={handleChange}
            />
            
            {/* 3. Input set to fully transparent (bg-transparent) */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-transparent" 
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Sign Up
            </button>
            
            {/* 4. Google button is semi-transparent white */}
            <button
              type="button"
              className="w-full py-2 bg-white/70 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center space-x-2"
              onClick={() => {window.location.href = getGoogleAuthUrl();}}
            >
              <FcGoogle className="text-xl " />
              <span>Continue with Google</span>
            </button>

          </form>
        // ) : (
        //   <p className="text-center text-green-500">
        //     You're signed in! 🎉 You can now use the features.
        //   </p>
        // )}
        ) : null}
      </div>
    </section>
  );
};

export default Signup;
