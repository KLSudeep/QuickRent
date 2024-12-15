import React from "react";
import { FaLaptop, FaTruck, FaRegCalendarCheck, FaCheckCircle } from "react-icons/fa"; 

const Features = () => {
  return (
    <div className="py-16 px-6 bg-gray-100 w-full text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">Why Choose QuickRent?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-4xl text-blue-500 mb-4">
            <FaLaptop />
          </div>
          <h3 className="text-xl font-semibold text-blue-500">Wide Range of Gadgets</h3>
          <p className="mt-2 text-gray-600">Rent tech like laptops, cameras, and more.</p>
        </div>
        
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
  <div className="flex items-start mb-4">
    <span className="text-4xl text-blue-500">₹</span> 
  </div>
  <h3 className="text-xl font-semibold text-blue-500">Affordable Pricing</h3>
  <p className="mt-2 text-gray-600">Flexible plans for every budget.</p>
</div>

        
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-4xl text-blue-500 mb-4">
            <FaTruck />
          </div>
          <h3 className="text-xl font-semibold text-blue-500">Quick Delivery</h3>
          <p className="mt-2 text-gray-600">Fast delivery to your doorstep.</p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-4xl text-blue-500 mb-4 flex justify-start">
            <FaCheckCircle /> 
          </div>
          <h3 className="text-xl font-semibold text-blue-500">Quality Assurance</h3>
          <p className="mt-2 text-gray-600">Fully functional and well-maintained gadgets.</p>
        </div>


        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-4xl text-blue-500 mb-4 flex justify-start">
            <FaRegCalendarCheck /> 
          </div>
          <h3 className="text-xl font-semibold text-blue-500">Easy Booking</h3>
          <p className="mt-2 text-gray-600">Quick and simple rental process.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
