import React from 'react';

const AboutSection2 = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-[40px] md:tex-[20px] font-bold text-teal-500 mb-4">We make sure your idea & creation delivered properly</h2>
        <p className="text-lg text-gray-700 mb-6">
          Pellentesque mollis urna vel semper egestas. Duis ac dictum lacus. Sed sagittis non nunc ac malesuada. Quisque eu velit urna.
        </p>
      </div>

      {/* Detailed Description Section */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <p className="text-gray-600 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
};

export default AboutSection2;