import React from 'react';

const AboutSection3 = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Video/Description */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-[40px] md:tex-[20px] font-bold text-teal-500 mb-4">We empower small business owners</h2>
          <p className="text-lg text-gray-700 mb-4">
            "Making an impact, together"
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Right Side: Video Placeholder */}
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-teal-200 rounded-lg p-4 shadow-lg flex items-center justify-center w-full max-w-xs">
            <div className="w-full aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder video link
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection3;