import React, { useEffect, useRef } from 'react';
import './scss/Tabs.css';
import cop1 from"../assets/cop1.jpg"
import cop2 from"../assets/cop2.jpg"
import cop3 from"../assets/cop3.jpg"
import cop4 from"../assets/cop4.jpeg"
import cop5 from"../assets/cop5.jpeg"
import cop6 from"../assets/cop6.jpeg"
import sport1 from"../assets/sport1.jpg"
import sport2 from"../assets/sport2.jpg"
import sports3 from"../assets/sport3.jpg"
import sport4 from"../assets/sport 2.jpg"
import sport5 from"../assets/sport 3.jpg"
import sports6 from"../assets/sport5.jpg"
import sport7 from"../assets/sport6.jpg"
import chef1 from"../assets/chef1.jpeg"
import chef2 from"../assets/chef2.jpeg"
import chef3 from"../assets/chef3.jpeg"
import chef4 from"../assets/chef4.jpeg"
import chef5 from"../assets/chef5.jpeg"
import chef6 from"../assets/chef6.jpeg"
import chef7 from"../assets/chef7.jpeg"
import chef8 from"../assets/chef8.jpeg"
import med from"../assets/med 1.jpeg"
import med2 from"../assets/med 2.jpeg"
import med3 from"../assets/med 3.jpeg"
import med4 from"../assets/med 4.jpeg"
import med5 from"../assets/med 5.jpeg"
import serv1 from"../assets/serv1.jpeg"
import serv2 from"../assets/serv2.jpeg"
import serv3 from"../assets/serv3.jpeg"
import serv4 from"../assets/serv4.jpeg"
import serv5 from"../assets/serv5.jpeg"
import serv6 from"../assets/serv6.jpeg"
import serv7 from"../assets/serv7.jpeg"
import serv8 from"../assets/serv8.jpeg"
import serv9 from"../assets/serv9.jpeg"
import serv10 from"../assets/serv10.jpeg"
const Carousel = ({ items }) => {
  const carouselRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const firstItem = carouselRef.current.firstChild;
        carouselRef.current.appendChild(firstItem);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-track" ref={carouselRef}>
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CarouselSection = () => {
  const sections = [
    {
      title: 'Corporate Wear',
      items: [
        { image: cop1, title: 'Corporate Wear', price: '$30' },
        { image: cop2, title: 'Corporate Wear', price: '$40' },
        { image: cop3, title: 'Corporate Wear', price: '$60' },
        { image: cop4, title: 'Corporate Wear', price: '$30' },
        { image: cop5, title: 'Corporate Wear', price: '$40' },
        { image: cop6, title: 'Corporate Wear', price: '$60' },
      ],
    },
    {
      title: 'Sports Wear',
      items: [
        { image: sport1, title: 'Sports Weart', price: '$25' },
        { image:sport2, title: 'Sports Wear', price: '$20' },
        { image: sports3, title: 'Sports Wear', price: '$50' },
        { image: sport4, title: 'Sports Weart', price: '$25' },
        { image:sport5, title: 'Sports Wear', price: '$20' },
        { image: sports6, title: 'Sports Wear', price: '$50' },
      ],
    },
    {
      title: 'Chef Wear',
      items: [
        { image: chef1, title: 'chef Weart', price: '$25' },
        { image:chef2, title: 'chef Wear', price: '$20' },
        { image: chef3, title: 'chef Wear', price: '$50' },
        { image: chef4, title: 'chef Weart', price: '$25' },
        { image:chef5, title: 'chef Wear', price: '$20' },
        { image:chef6, title: 'chef Wear', price: '$50' },
        { image:chef7, title: 'chef Wear', price: '$20' },
        { image:chef8, title: 'chef Wear', price: '$50' },
      ],
    },
    {
      title: 'Medical',
      items: [
        { image: med, title: 'Medical ', price: '$25' },
        { image:med2, title: 'Medical ', price: '$20' },
        { image: med3, title: 'Medical ', price: '$50' },
        { image: med4, title: 'Medical ', price: '$25' },
        { image:med5, title: 'Medical ', price: '$20' },
       
      ],
    },
    {
      title: 'Service Uniforms',
      items: [
        { image:serv1, title: 'Uniform ', price: '$25' },
        { image:serv2, title: 'Uniform ', price: '$20' },
        { image: serv3, title: 'Uniform ', price: '$50' },
        { image: serv4, title: 'Uniform ', price: '$25' },
        { image:serv5, title: 'Uniform ', price: '$20' },
        { image:serv6, title: 'Uniform ', price: '$27' },
        { image:serv7, title: 'Uniform ', price: '$20' },
        { image:serv8, title: 'Uniform ', price: '$23' },
        { image:serv9, title: 'Uniform ', price: '$28' },
        { image:serv10, title: 'Uniform ', price: '$21' },
      ],
    },
    // Add other sections similarly
  ];

  return (
    <div className="carousel-section">
      {sections.map((section, index) => (
        <div className="section" key={index}>
          <h2  className="flex text-[30px] text-[#000] items-center justify-center my-[50px]">{section.title}</h2>
          <Carousel items={section.items} />
        </div>
      ))}
    </div>
  );
};

export default CarouselSection;