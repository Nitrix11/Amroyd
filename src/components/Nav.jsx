import React, { useState } from "react";
import logo from "../../public/AMROYD LOGO.png";
import { Link } from "react-router-dom";
import "../scss/Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-bar ">
      <div className="nav bg-[rgba(0, 0, 0, 0.404)] ">
        <div className="logo">
          <img src={logo} alt="cricvest" />
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>

          <Link to="/">
          <li>
            <a href="#" className="text-[#261B6C] text-[15px] font-bold">
              Home
            </a>
          </li>
          </Link>
          <Link to="/about">
          <li>
            <a href="#" className="text-[#261B6C] text-[15px] font-bold">
              About Us
            </a>
          </li>
          </Link>
          <Link to="/services">
          <li>
            <a href="#" className="text-[#261B6C] text-[15px] font-bold">
              Services
            </a>
          </li>
          </Link>
          <Link to="/contact">

          <li>
            <a href="#" className="text-[#261B6C] text-[15px] font-bold">
            Contact Us
            </a>
          </li>
          </Link>


        


   
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="">
            <div
              className={` bar bg-[blue] circle1 blue1 ${
                isOpen ? "open" : ""
              }`}
            ></div>
            <div className={` bar bg-[blue] ${isOpen ? "open" : ""}`}></div>
          </div>
          <div className="">
            <div className={`  bar bg-[blue] brown1 ${isOpen ? "open" : ""}`}></div>
            <div
              className={` bar circle1 bg-[blue]  blue1 ${
                isOpen ? "open" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
