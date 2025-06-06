import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Wheat } from 'lucide-react';

const Dashboard = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null); // ✅ NEW STATE
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setResult(null);
    setError('');

    if (file) {
      setPreview(URL.createObjectURL(file)); // ✅ SET PREVIEW URL
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setError('Please upload an image.');
      return;
    }

    const formData = new FormData();
    formData.append('file', image);

    setLoading(true);
    setResult(null);
    setError('');

    try {
      const response = await axios.post('http://localhost:8000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setResult(response.data);
    } catch (err) {
      setError('Prediction failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Clean up preview URL to avoid memory leaks
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  useEffect(() => {
    if (result) {
      console.log('Prediction Result:', result);
    }
  }, [result]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8">
        {/* Heading with icon */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Wheat className="text-green-600 dark:text-green-400 w-8 h-8" />
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">Wheat Doc</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 dark:text-gray-200 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-100 dark:file:bg-green-900 file:text-green-700 dark:file:text-green-300 hover:file:bg-green-200 dark:hover:file:bg-green-800 cursor-pointer"
          />

          {/* ✅ IMAGE PREVIEW */}
          {preview && (
            <div className="mt-2 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Image Preview:</p>
              <img
                src={preview}
                alt="Uploaded preview"
                className="mx-auto max-h-64 rounded-lg shadow"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 disabled:opacity-50"
          >
            {loading ? 'Predicting...' : 'Predict Disease'}
          </button>
        </form>

        {error && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-4 text-center">{error}</p>
        )}

        {result && (
          <div className="mt-6 bg-gray-100 dark:bg-gray-700 rounded-xl p-4 shadow-inner">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Prediction Result
            </h3>
            <p className="text-gray-700 dark:text-gray-200"><strong>Disease:</strong> {result.disease}</p>
            <p className="text-gray-700 dark:text-gray-200"><strong>Confidence:</strong> {result.confidence}</p>
            <p className="text-gray-700 dark:text-gray-200"><strong>Treatment:</strong> {result.treatment}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
