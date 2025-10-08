import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import About from "./components/About";
import ImageUpload from "./components/ImageUpload";
import Footer from "./components/Footer";
import toast, { Toaster } from "react-hot-toast";
import backgroundImage from "./assets/bg-image-New.jpg";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ResultPage from "./components/ResultPage";



const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (username) => {
    setUser({ name: username });
    toast.success("Login Successful! ✅");
    navigate("/"); // Redirect to Home
  };

  const handleSignup = (username) => {
    setUser({ name: username });
    toast.success("Signup Successful! ✅");
    navigate("/"); // Redirect to Home
  };

  const handleLogout = () => {
    setUser(null);
    toast("Logged out successfully!");
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-no-repeat bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10">
        <Nav isLoggedIn={!!user} handleLogout={handleLogout} />
        <Toaster />

        <Routes>
          {/* nav */}
          <Route
            path="/"
            element={
              <>
                <About />
                <Services /> 
                <ImageUpload />
                <Contact />   
                <Footer />
              </>
            }
          />

          {/* Login */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          {/* Signup */}
          <Route
            path="/signup"
            element={<Signup onSignup={handleSignup} isLoggedIn={!!user} />}
          />
          <Route
            path="/result"
            element={<ResultPage />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
