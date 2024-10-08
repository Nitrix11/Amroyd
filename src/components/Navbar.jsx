import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/AMROYD LOGO.jpg";

function Navbar() {
  return (
    <div id="nav" className="flex items-center justify-between p-4 bg-[ rgba(0, 0, 0, 1.438)]">
      {/* Logo Section */}
      <div className="w-[5%]">
        <img src={logo1} alt="Logo" className="w-full h-auto" />
      </div>

      {/* Nav Links */}
      <ul className="flex flex-row text-white text-[16px] gap-[30px]">
        <Link to="/">
          <li className="hover:text-gray-400">Home</li>
        </Link>
        <Link to="/about">
          <li className="hover:text-gray-400 ">About Us</li>
        </Link>
        <Link to="/products">
          <li className="hover:text-gray-400">Products</li>
        </Link>
        <Link to="/contact">
          <li className="hover:text-gray-400">Contact Us</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
