import React, { useState } from "react";

const ImageUpload = () => {
  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME; // just the name
  const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState(null);

  const handleUpload = async () => {
    if (!selectedImage) {
      alert("Please select an image first!");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("upload_preset", UPLOAD_PRESET);

      // Correct Cloudinary endpoint
      const res = await fetch(CLOUD_NAME, {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      const data = await res.json();

      if (data.error) {
        console.error("Cloudinary error:", data.error);
        alert("Image upload failed: " + data.error.message);
      } else {
        setUploadedUrl(data.secure_url);
        alert("Image uploaded successfully!");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Image upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-12 mb-16 px-4">
      <div className="p-8 bg-gray-900/70 rounded-xl shadow-2xl w-full max-w-4xl text-white text-center border border-blue-500/50">
        <h2 className="text-2xl font-bold mb-6 text-blue-300">Upload Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedImage(e.target.files[0])}
          className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 mb-6 cursor-pointer"
        />
        <button
          onClick={handleUpload}
          disabled={loading}
          className={`bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full transition duration-300 shadow-lg ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>

        {uploadedUrl && (
          <div className="mt-6">
            <p className="mb-2">Uploaded Image URL:</p>
            <a
              href={uploadedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline break-all"
            >
              {uploadedUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
  