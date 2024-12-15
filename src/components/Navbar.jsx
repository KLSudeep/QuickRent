import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full p-4 shadow-md" style={{ backgroundColor: "#0069d9" }}>
      <div className="flex justify-between items-center">
        <Link 
          to="/" 
          className="text-white text-3xl font-extrabold hover:text-blue-900 transition-transform duration-300 transform hover:scale-110"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          QuickRent
        </Link>

        <ul className="flex space-x-8">
          <li>
            <Link 
              to="/" 
              className="text-white text-lg font-medium hover:text-orange-200 transition-transform duration-300 transform hover:scale-110"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/features" 
              className="text-white text-lg font-medium hover:text-orange-200 transition-transform duration-300 transform hover:scale-110"
            >
              Features
            </Link>
          </li>
          <li>
            <Link 
              to="/gadgets" 
              className="text-white text-lg font-medium hover:text-orange-200 transition-transform duration-300 transform hover:scale-110"
            >
              Gadgets
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-white text-lg font-medium hover:text-orange-200 transition-transform duration-300 transform hover:scale-150"
            >
              Contact
            </Link>
          </li>          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
