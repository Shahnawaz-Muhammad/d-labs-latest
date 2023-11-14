// NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
