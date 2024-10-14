import React from 'react';

const Boost = () => {
  return (
    <div className="bg-gray-900 text-white py-10">
      <h2 className="text-center text-[40px] md:tex-[20px]  font-bold mb-8">'
 '
        Boost Your Social Media Traffic!
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {/* Card 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md transition hover:shadow-xl flex flex-col justify-between">
          <h3 className="text-l font-semibold mb-2">Digital Marketing Services</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend orci hendrerit varius.
          </p>
          <button className="bg-teal-500 text-black font-semibold py-2 px-4 rounded transition hover:bg-teal-600 w-full">
            Get Started
          </button>
        </div>
        {/* Card 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md transition hover:shadow-xl flex flex-col justify-between">
          <h3 className="text-l font-semibold mb-2"> SEO Optimizations</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend orci hendrerit varius.
          </p>
          <button className="bg-teal-500 text-black font-semibold py-2 px-4 rounded transition hover:bg-teal-600 w-full">
            Get Started
          </button>
        </div>
        {/* Card 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md transition hover:shadow-xl flex flex-col justify-between">
          <h3 className="text-l font-semibold mb-2">Post Boosting/Sponsored Ads</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend orci hendrerit varius.
          </p>
          <button className="bg-teal-500 text-black font-semibold py-2 px-4 rounded transition hover:bg-teal-600 w-full">
            Get Started
          </button>
        </div>
        {/* Card 4 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md transition hover:shadow-xl flex flex-col justify-between">
          <h3 className="text-l font-semibold mb-2">Company Profile Design </h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend orci hendrerit varius.
          </p>
          <button className="bg-teal-500 text-black font-semibold py-2 px-4 rounded transition hover:bg-teal-600 w-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Boost;