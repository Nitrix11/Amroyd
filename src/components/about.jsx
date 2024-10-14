import React from 'react';
import clients from"../assets/S clients.jpeg"
function AboutSection() {
  return (
    <div className="bg-teal-500 text-white py-12 px-4 md:py-20 md:px-8">
      <h2 className="text-[40px] md:tex-[20px]font-bold mb-4">About Us</h2>
      <p className="mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
        ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          {/* Replace with your image */}
          <img src={clients}alt="About Us Image" className="w-full md:w-3/4" />
        </div>
        <div className="md:w-1/2 md:ml-4">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <ul>
            <li>Innovation</li>
            <li>Collaboration</li>
            <li>Excellence</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;