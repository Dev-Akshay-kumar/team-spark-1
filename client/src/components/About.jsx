import React from "react";

const About = () => {
  return (
    <section className="text-center py-16 px-6 mt-10 ">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
        About ContentGuard AI
      </h2>
      <p className="max-w-3xl mx-auto text-gray-200 leading-relaxed text-xl sm:text-2xl font-semibold leading-[0.2]">
        <strong>ContentGuard AI</strong> helps detect and prevent offensive or inappropriate
        content in images before they are uploaded. It uses advanced AI-powered moderation
        to maintain safe, inclusive digital spaces.
      </p>
    </section>
  );
};

export default About;
