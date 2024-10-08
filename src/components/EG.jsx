import React, { useState, useEffect } from "react";
import "./scss/EG.css";  // Import necessary CSS for styling
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
const categories = {
    "Work Wear": [
      { image: cop4, title: 'work Wear', price: '$30' },
      { image: cop5, title: 'work Wear', price: '$40' },
      { image: cop6, title: 'work Wear', price: '$60' },
      { image: cop4, title: 'work Wear', price: '$30' },
    ],
    "Corporate Wear": [
        { image: cop1, title: 'Corporate Wear', price: '$30' },
        { image: cop2, title: 'Corporate Wear', price: '$40' },
        { image: cop3, title: 'Corporate Wear', price: '$60' },
        { image: cop4, title: 'Corporate Wear', price: '$30' },
        { image: cop5, title: 'Corporate Wear', price: '$40' },
        { image: cop6, title: 'Corporate Wear', price: '$60' },
    ],
    "Chef Wear": [
        { image: chef1, title: 'chef Weart', price: '$25' },
        { image:chef2, title: 'chef Wear', price: '$20' },
        { image: chef3, title: 'chef Wear', price: '$50' },
        { image: chef4, title: 'chef Weart', price: '$25' },
        { image:chef5, title: 'chef Wear', price: '$20' },
        { image:chef6, title: 'chef Wear', price: '$50' },
        { image:chef7, title: 'chef Wear', price: '$20' },
        { image:chef8, title: 'chef Wear', price: '$50' },
    ],
    "Service Uniforms": [
        { image:serv1, title: 'Uniform ', price: '$25' },
        { image:serv2, title: 'Uniform ', price: '$20' },
        { image: serv3, title: 'Uniform ', price: '$50' },
        { image: serv4, title: 'Uniform ', price: '$25' },
        { image:serv5, title: 'Uniform ', price: '$20' },
        { image:serv6, title: 'Uniform ', price: '$27' },
        { image:serv7, title: 'Uniform ', price: '$20' },
        { image:serv8, title: 'Uniform ', price: '$23' },
        { image:serv9, title: 'Uniform ', price: '$28' },
        { image:serv10, title: 'Uniform ', price: '$21' }
    ],
    "Medical Wear": [
        { image: med, title: 'Medical ', price: '$25' },
        { image:med2, title: 'Medical ', price: '$20' },
        { image: med3, title: 'Medical ', price: '$50' },
        { image: med4, title: 'Medical ', price: '$25' },
        { image:med5, title: 'Medical ', price: '$20' },
       ],
    // Continue adding other categories like Chef Wear, Sport Wear, etc.
  };
  
// Tab Navigation Component
const Tabs = ({ categories, selectedTab, setSelectedTab }) => {
    return (
      <ul className="tabs">
        {Object.keys(categories).map((category) => (
          <li
            key={category}
            className={category === selectedTab ? "active" : ""}
            onClick={() => setSelectedTab(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    );
  };
  
  // Product Carousel Component with Manual Buttons
  const ProductCarousel = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Manual navigation with improved readability
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };
  
    // Auto-slide every 5 seconds with proper cleanup
    useEffect(() => {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }, [products.length]); // Only re-run when products change
  
    return (
      <div className="carousel2">
        {products.map((product, index) => (
          <div
            key={index}
            className={`carousel-item2 ${index === currentIndex ? "active" : ""}`}
          >
            <div className="image-container2">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="carousel-info">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
        <div className="carousel-controls">
          <button onClick={handlePrevious} className="prev-button">❮</button>
          <button onClick={handleNext} className="next-button">❯</button>
        </div>
      </div>
    );
  };
  
  // 3D Rotating Carousel (Cube) Component
  const ThreeDCarousel = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1)   
   % products.length);
      }, 5000); // Auto-slide every 5 seconds
      return () => clearInterval(interval);
    }, [products]);
  
    return (
      <div className="threeD-carousel">
        <div className="carousel-cube" style={{ transform: `rotateY(${currentIndex * -90}deg)` }}>
          {products.map((product, index) => (
            <div key={index} className="cube-face">
              <div className="image-container">
                <img src={product.image} alt={product.title} />
              </div>
              <h3>{product.title}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // Main Section Component
  const TabSection = () => {
    const [selectedTab, setSelectedTab] = useState("Work Wear");
  
    return (
      <div className="tab-section">
        <Tabs
          categories={categories}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className="tab-content">
          <ProductCarousel products={categories[selectedTab]} />
          <h2>3D view in {selectedTab}</h2>
          <ThreeDCarousel products={categories[selectedTab]} />
        </div>
      </div>
    );
  };
  
  export default TabSection;