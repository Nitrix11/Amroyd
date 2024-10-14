import React from 'react';
import { FaCode, FaPencilAlt, FaChartPie, FaMobileAlt, FaBullhorn, FaBriefcase, FaDatabase } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-[40px] md:tex-[20px] font-bold mb-4">Our Services</h2>
        <p className="text-lg mb-6">Tailored solutions for your digital needs.</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
          <FaCode className="text-teal-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Website Development</h3>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
          <FaPencilAlt className="text-teal-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold">SEO & Content Writing</h3>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
          <FaChartPie className="text-teal-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Graphic Design</h3>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
          <FaMobileAlt className="text-teal-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold">UI/UX Web Designing</h3>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
          <FaBullhorn className="text-teal-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Digital Market Planning</h3>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
          <FaBriefcase className="text-teal-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Business Management</h3>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
          <FaDatabase className="text-teal-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Market Data Analyzing</h3>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold mb-2">Get In Touch</h4>
        <p className="text-lg mb-2">
          Call us at: <span className="text-teal-500">987 233 0000</span>
        </p>
        <button className="bg-teal-500 text-white py-2 px-4 rounded-lg">
          Make Appointment
        </button>
      </div>

      {/* Process Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Process We Follow</h2>
        <div className="flex justify-center space-x-6">
          {[
            { step: "Research Project", number: 1 },
            { step: "Evaluate Plans", number: 2 },
            { step: "Best Results", number: 3 },
          ].map((item) => (
            <div key={item.number} className="flex flex-col items-center">
              <div className="bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-2">
                {item.number}
              </div>
              <h3 className="text-xl font-semibold">{item.step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;