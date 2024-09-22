import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-black text-white overflow-hidden">
      {/* Animated circles in the background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600 to-indigo-600 opacity-30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-600 to-red-600 opacity-30 rounded-full animate-pulse"></div>
      
      {/* Error message with animation */}
      <div className="text-center z-10">
        <h1 className="text-6xl font-bold animate-bounce">404</h1>
        <p className="mt-4 text-xl animate-pulse">Oops! Page not found.</p>
        <p className="mt-2 text-lg text-gray-400">It looks like you're lost. The page you're looking for doesn't exist.</p>

        {/* Link back to home */}
        <Link to="/" className="mt-8 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-500 transition-all duration-300">
          Go Home
        </Link>
      </div>

      {/* Floating animation */}
      <div className="absolute inset-0 bg-black opacity-75 z-0"></div>
    </div>
  );
};

export default Error;
