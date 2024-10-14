import React from 'react';
import clients from'../assets/S clients.jpeg'

const Goals = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-[40px] md:tex-[20px] font-bold mb-4">
            Our main goal to satisfied local clients
          </h2>
          <p className="text-lg mb-6">
"

            <span className="text-teal-500 font-semibold">
            We are dedicated to meeting the needs and exceeding the </span> expectations of our local clients.

          </p>
          <ul className="list-none pl-0 mb-6">
            <li className="flex items-center mb-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
              Development
            </li>
            <li className="flex items-center mb-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
              Analyzing
            </li>
            <li className="flex items-center mb-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
              Design and Adaptive
            </li>
            <li className="flex items-center mb-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
              Search Engine Optimization
            </li>
          </ul>
          <div className="flex space-x-4">
            <button className="bg-teal-500 text-black font-semibold py-2 px-4 rounded transition hover:bg-teal-600">
              Get Started
            </button>
            <button className="bg-transparent border border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded transition hover:bg-teal-500 hover:text-black">
              Learn More
            </button>
          </div>
        </div>
        {/* Image Placeholder */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={clients} // Replace with your actual image URL
            alt="Team Collaboration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Goals;