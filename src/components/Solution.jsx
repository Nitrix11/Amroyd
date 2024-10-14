import React from 'react';

const DigitalSolutionsSection = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-[40px] md:tex-[20px] font-bold mb-2">
          We Provide Amazing Digital Solutions
        </h2>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor. Auctor tincidunt.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
        {/* Card 1 */}
        <div className="bg-purple-600 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/40" // Replace with actual icon
              alt="Social Media Marketing"
              className="w-10 h-10"
            />
            <h3 className="text-xl font-semibold ml-2">Social Media Marketing</h3>
          </div>
          <ul className="list-none pl-0">
            <li className="flex items-center mb-2">
              <div className="w-3 h-3 bg-teal-400 rounded-full mr-2"></div>
              Increase engagement
            </li>
            <li className="flex items-center mb-2">
              <div className="w-3 h-3 bg-teal-400 rounded-full mr-2"></div>
              Build brand awareness
            </li>
          </ul>
        </div>
        {/* Card 2 */}
        <div className="bg-teal-500 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/40" // Replace with actual icon
              alt="Creative Solutions"
              className="w-10 h-10"
            />
            <h3 className="text-xl font-semibold ml-2">Creative Solutions</h3>
          </div>
          <ul className="list-none pl-0">
            <li className="flex items-center mb-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
              Tailored strategies
            </li>
            <li className="flex items-center mb-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
              Innovative designs
            </li>
          </ul>
        </div>
        {/* Card 3 */}
        <div className="bg-blue-600 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/40" // Replace with actual icon
              alt="Boost Traffic & Sales"
              className="w-10 h-10"
            />
            <h3 className="text-xl font-semibold ml-2">Boost Traffic & Sales</h3>
          </div>
          <ul className="list-none pl-0">
            <li className="flex items-center mb-2">
              <div className="w-3 h-3 bg-teal-400 rounded-full mr-2"></div>
              Drive targeted traffic
            </li>
            <li className="flex items-center mb-2">
              <div className="w-3 h-3 bg-teal-400 rounded-full mr-2"></div>
              Increase conversion rates
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DigitalSolutionsSection;