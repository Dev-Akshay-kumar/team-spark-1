import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields!");
      return;
    }
    // You can integrate email sending API here
    alert("Message sent successfully! ✅");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 px-6 bg-transparent text-white" id="contact">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-100 max-w-2xl mx-auto text-2xl">
          Have questions or want to get in touch? Fill out the form below or use our contact details.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6 border bg-transparent rounded-xl p-8 shadow-lg flex flex-col align-center ">
          <div className="flex items-center gap-4">
            <FiMail className="text-2xl text-blue-500" />
            <span>support@contentguard.ai</span>
          </div>
          <div className="flex items-center gap-4">
            <FiPhone className="text-2xl text-green-500" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-4">
            <FiMapPin className="text-2xl text-purple-500" />
            <span>jamshedpur, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 text-white"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 text-white"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 text-white resize-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
