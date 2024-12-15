import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full p-4 shadow-md" style={{ backgroundColor: "#8891FD" }}>
      <div className="flex justify-between items-center">
      <Link 
  to="/" 
  className="text-white text-xl font-bold hover:text-blue-500 transition-all duration-300 transform hover:scale-105">
  QuickRent
</Link>

        <ul className="flex space-x-6">
          <li><Link to="/" className="text-white hover:text-black transform hover:scale-150">Home</Link></li>
          <li><Link to="/features" className="text-white  hover:text-black transform hover:scale-150">Features</Link></li>
          <li><Link to="/gadgets" className="text-white  hover:text-black transform hover:scale-150">Gadgets</Link></li>
          <li><Link to="/contact" className="text-white  hover:text-black transform hover:scale-150">Contact</Link></li>          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
