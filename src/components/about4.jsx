import React from 'react';
import { FaUsers, FaBullseye, FaShieldAlt } from 'react-icons/fa';

const AboutSection4 = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-[40px] md:tex-[20px]font-bold text-teal-500 mb-4">We help businesses to grow faster and bigger</h2>
        <p className="text-lg text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Professional Team */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <FaUsers className="text-teal-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Professional Team</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Target Oriented */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <FaBullseye className="text-teal-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Target Oriented</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Success Guarantee */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <FaShieldAlt className="text-teal-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Success Guarantee</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection4;