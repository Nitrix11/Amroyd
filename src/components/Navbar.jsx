import React, { useState } from 'react';
import logo1 from "../assets/AMROYD LOGO.jpg";
import { Link } from "react-router-dom";
import AboutPage from "./Pages/Aboutus";
import ContactPage from "./Pages/Contact";
import ProductsPage from "./Pages/Products";
import App from "../App";
import "../components/scss/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="nav" className="flex items-center justify-center">
      <nav className="bg-[ rgba(0, 0, 0, 0.868)] flex items-center justify-center gap-2">
        <div className="logo1 w-[5%] mr-2">
          <img src={logo1} alt="" />
        </div>
        <button className={`menu-button ${isMenuOpen ? 'active' : ''} ${window.innerWidth <= 425 || window.innerWidth >= 320 ? '' : 'hidden'}`} onClick={toggleMenu}>
          <span className="menu-icon">&#9776;</span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''} ${window.innerWidth <= 768 ? 'hidden' : ''}`}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/products">
            <li>Products</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;