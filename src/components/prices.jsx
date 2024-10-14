import React from 'react';

const PricingSection = () => {
  return (
    <div className='bg-[#000]'>


    <div className="bg-gray-900 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-[40px] md:tex-[20px] font-bold mb-4 text-[#fff]">Lorem ipsum dolor sit</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Intro Card */}
        <div className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-95">
          <h3 className="text-xl font-semibold mb-2">Intro</h3>
          <p className="text-2xl font-bold mb-4">$19/month</p>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur. Velit vivamus non erat tristique platea fames et commodo.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Dolor sit amet</li>
          </ul>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
            Choose Plan
          </button>
        </div>

        {/* Popular Card */}
        <div className="bg-blue-600 text-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-95">
          <h3 className="text-xl font-semibold mb-2">Popular</h3>
          <p className="text-2xl font-bold mb-4">$39/month</p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Velit vivamus non erat tristique platea fames et commodo.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Dolor sit amet</li>
          </ul>
          <button className="bg-white text-blue-600 py-2 px-4 rounded-lg">
            Choose Plan
          </button>
        </div>

        {/* Enterprise Card */}
        <div className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-95">
          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
          <p className="text-2xl font-bold mb-4">$32/month</p>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur. Velit vivamus non erat tristique platea fames et commodo.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Dolor sit amet</li>
          </ul>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PricingSection;