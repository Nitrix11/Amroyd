import React, { useState } from 'react';
import './scss/logos.css';
import cate1 from"../assets/cate1.jpg"
import cate2 from"../assets/cate2.jpg"
import cate5 from"../assets/cate5.jpeg"
import cate4 from"../assets/cate4.jpeg"



const logos = [
    cate1,
    cate2,
    cate5,
    cate4,
    cate1,
  
    

];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleLogos = 4; // Number of logos to show at once
  
    const next = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + visibleLogos >= logos.length ? 0 : prevIndex + visibleLogos
      );
    };
  
    const prev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - visibleLogos < 0 ? logos.length - visibleLogos : prevIndex - visibleLogos
      );
    };
  
    return (
      <>

      <h1 className="flex text-[40px] text-[#000] items-center justify-center pb-[40px]">latest Arrivals</h1>
      <hr className='py-[10px]' />
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prev}>❮</button>
        <div className="carousel-logos">
          {logos.slice(currentIndex, currentIndex + visibleLogos).map((logo, index) => (
            <div className="logo" key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={next}>❯</button>
      </div>
      </>
    );
  };
  
  export default Carousel;