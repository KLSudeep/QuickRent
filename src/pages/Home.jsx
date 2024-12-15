import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/gadgets/background.jpg"; 

const Home = () => {
  return (
    <div
      className="hero w-full h-screen flex justify-center items-center text-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
 
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

      <div className="space-y-6 z-10 text-white animate-fadeIn">
        <h1 className="text-5xl font-extrabold tracking-wide animate-slideDown">
          QuickRent - Rent Gadgets Anytime
        </h1>
        <p className="text-2xl  text-yellow-100 animate-fadeIn">
        Unlock the Power of Instant Rentals - Get What You Need, When You Need It!
        </p>
        <div>
        <Link
          to="/gadgets"
          className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300"
        >
          Explore Rentals
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
