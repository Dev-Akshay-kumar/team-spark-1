import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Grab result passed from ImageUpload
  const result = location.state?.result;

  if (!result) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-white">
        <p>No analysis result found. Go back to <span className="text-blue-400 cursor-pointer" onClick={() => navigate("/")}>Home</span></p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white px-4">
      <div className="flex flex-col md:flex-row bg-gray-800/70 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden max-w-5xl w-full">
        
        {/* Left Side: Image */}
        <div className="md:w-1/2">
          <img
            src={result.imageUrl || 'https://via.placeholder.com/400x400?text=Uploaded+Image'}
            alt={result.imageName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Details */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold mb-4">{result.imageName}</h2>
          <p><span className="font-semibold">Deepfake Score:</span> {result.deepfakeScore}</p>
          <p><span className="font-semibold">Offensive Score:</span> {result.offensiveScore}</p>
          <p><span className="font-semibold">Status:</span> {result.status}</p>
          <p className={`font-bold ${result.isSafe ? 'text-green-400' : 'text-red-500'}`}>
            {result.isSafe ? "Content is Safe ✅" : "Content is Unsafe ❌"}
          </p>
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition"
            onClick={() => navigate("/")}
          >
            Analyze Another Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
