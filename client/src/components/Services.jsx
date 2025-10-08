import React from "react";
import { RiShieldCheckFill, RiImageEditFill, RiBarChart2Fill } from "react-icons/ri";

const Services = () => {
  const services = [
    {
      icon: <RiShieldCheckFill className="text-4xl text-blue-500 mb-4" />,
      title: "Offensive Content Detection",
      description:
        "Automatically detect offensive, abusive, or inappropriate content in text and images to maintain a safe environment.",
    },
    {
      icon: <RiImageEditFill className="text-4xl text-green-500 mb-4" />,
      title: "Image Moderation",
      description:
        "Analyze uploaded images and flag inappropriate content, ensuring safe visual material for your platform.",
    },
    {
      icon: <RiBarChart2Fill className="text-4xl text-purple-500 mb-4" />,
      title: "Detailed Analytics",
      description:
        "Get in-depth insights and reports about content trends, flagged items, and user activity.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-transparent text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          ContentGuard AI provides state-of-the-art content moderation tools to keep your platform safe and secure.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
            <p className="text-gray-300 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
