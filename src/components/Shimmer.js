import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 p-4">
      {Array(28).fill("").map((_, index) => (
        <div
          key={index}
          className="shimmer-card bg-gray-300 rounded-lg w-60 h-80 p-4 relative overflow-hidden"
        >
          <div className="shimmer-img bg-gray-700 rounded-md h-40 mb-4"></div>
          <div className="shimmer-line bg-gray-400 rounded-md h-6 mb-2"></div>
          <div className="shimmer-line bg-gray-400 rounded-md h-6 mb-2"></div>
          <div className="shimmer-line bg-gray-400 rounded-md h-6"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
