import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center px-4">
      {/* 404 Text */}
      <h1 className="text-7xl font-extrabold bg-gradient-to-r from-green-800 to-green-500 bg-clip-text text-transparent">
        404
      </h1>

      {/* Title */}
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>

      {/* Description */}
      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <button
        onClick={() => (window.location.href = '/')}
        className="mt-6 px-6 py-2 rounded-lg bg-[#244D3F] text-white hover:bg-green-800 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
