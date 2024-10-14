import React from 'react';
import IT from"../assets/IT.jpeg"
import "../scss/hero.css"

const Hero= () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <div id='bg' className="absolute inset-0 bg-cover bg-center" />
      
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-[40px] md:tex-[20px] font-bold mb-4 animate-pulse">
          We are digital agency.
        </h1>
        <p className="text-lg md:text-xl mb-6">
          CREATIVE MIND, CREATIVE WORKS.
        </p>
        <button className="bg-teal-500 text-black font-semibold py-2 px-4 rounded transition hover:bg-teal-600">
          GETTING STARTED
        </button>
      </div>
    </div>
  );
};

export default Hero;