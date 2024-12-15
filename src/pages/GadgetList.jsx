import React, { useState } from "react";
import laptopImg from "../assets/gadgets/laptop.jpg";
import dslrCameraImg from "../assets/gadgets/dslr-camera.jpg";
import consoleImg from "../assets/gadgets/console.jpg";
import phoneImg from "../assets/gadgets/phone.jpg";
import headphoneImg from "../assets/gadgets/headphones.jpg";
import tabletImg from "../assets/gadgets/tablet.jpg";
import smartwatchImg from "../assets/gadgets/smartwatch.jpg";
import droneImg from "../assets/gadgets/drone.jpg";
import bluetoothSpeakerImg from "../assets/gadgets/bluetooth-speaker.jpg";
import projectorImg from "../assets/gadgets/projector.jpg";
import goproImg from "../assets/gadgets/gopro.jpg";
import ringLightImg from "../assets/gadgets/ring-light.jpg";
import laptopStandImg from "../assets/gadgets/laptop-stand.jpg";
import electricScooterImg from "../assets/gadgets/electric-scooter.jpg";
import mirrorlessCameraImg from "../assets/gadgets/mirrorless-camera.jpg";
import vrHeadsetImg from "../assets/gadgets/vr-headset.jpg";
import fitnessTrackerImg from "../assets/gadgets/fitness-tracker.jpg";
import ebookReaderImg from "../assets/gadgets/ebook-reader.jpg";
import webcamImg from "../assets/gadgets/webcam.jpg";
import homeTheaterImg from "../assets/gadgets/home-theater.jpg";
import instantPrintCameraImg from "../assets/gadgets/instant-print-camera.jpg";
import airPurifierImg from "../assets/gadgets/air-purifier.jpg";
import externalHardDriveImg from "../assets/gadgets/external-hard-drive.jpg";
import microphoneImg from "../assets/gadgets/microphone.jpg";
import smartThermostatImg from "../assets/gadgets/smart-thermostat.jpg";

const GadgetList = () => {
  const [gadgets] = useState([
    { id: 1, name: "Laptop", price: "₹150/day", image: laptopImg, features: ["16GB RAM", "512GB SSD", "Intel i7 Processor"] },
    { id: 2, name: "Camera (DSLR)", price: "₹200/day", image: dslrCameraImg, features: ["4K Video", "20MP Camera", "Wi-Fi Enabled"] },
    { id: 3, name: "Gaming Console", price: "₹200/day", image: consoleImg, features: ["8GB RAM", "500GB Storage", "Supports 4K"] },
    { id: 4, name: "Smartphone", price: "₹250/day", image: phoneImg, features: ["6GB RAM", "128GB Storage", "48MP Camera"] },
    { id: 5, name: "Headphones", price: "₹50/day", image: headphoneImg, features: ["Noise Cancelling", "Bluetooth", "20hrs Battery Life"] },
    { id: 6, name: "Tablet", price: "₹100/day", image: tabletImg, features: ["10.5 inch Screen", "64GB Storage", "4GB RAM"] },
    { id: 7, name: "Smartwatch", price: "₹75/day", image: smartwatchImg, features: ["Heart Rate Monitor", "GPS", "Waterproof"] },
    { id: 8, name: "Drone", price: "₹300/day", image: droneImg, features: ["4K Camera", "GPS Stabilization", "30min Flight Time"] },
    { id: 9, name: "Bluetooth Speaker", price: "₹100/day", image: bluetoothSpeakerImg, features: ["Stereo Sound", "10hrs Battery", "Waterproof"] },
    { id: 10, name: "Projector", price: "₹150/day", image: projectorImg, features: ["1080p Resolution", "Compact", "2000 Lumens"] },
    { id: 11, name: "GoPro Camera", price: "₹250/day", image: goproImg, features: ["4K Video", "Waterproof", "Wide Angle Lens"] },
    { id: 12, name: "Ring Light", price: "₹75/day", image: ringLightImg, features: ["Adjustable Brightness", "Portable", "Stand Included"] },
    { id: 13, name: "Laptop Stand", price: "₹50/day", image: laptopStandImg, features: ["Adjustable Height", "Portable", "Cooling Feature"] },
    { id: 14, name: "Electric Scooter", price: "₹400/day", image: electricScooterImg, features: ["25km Range", "20km/h Speed", "Portable"] },
    { id: 15, name: "Camera (Mirrorless)", price: "₹250/day", image: mirrorlessCameraImg, features: ["4K Video", "Autofocus", "Compact Body"] },
    { id: 16, name: "VR Headset", price: "₹375/day", image: vrHeadsetImg, features: ["HD Display", "Immersive Experience", "Compatible with Multiple Devices"] },
    { id: 17, name: "Fitness Tracker", price: "₹100/day", image: fitnessTrackerImg, features: ["Heart Rate Monitor", "Step Tracker", "Waterproof"] },
    { id: 18, name: "E-Book Reader", price: "₹75/day", image: ebookReaderImg, features: ["300ppi Screen", "Adjustable Light", "10,000+ Book Storage"] },
    { id: 19, name: "Webcam", price: "₹50/day", image: webcamImg, features: ["1080p HD", "Built-in Mic", "Clip-on Design"] },
    { id: 20, name: "Home Theater System", price: "₹350/day", image: homeTheaterImg, features: ["5.1 Surround Sound", "Bluetooth", "200W Power"] },
    { id: 21, name: "Camera (Instant Print)", price: "₹100/day", image: instantPrintCameraImg, features: ["Instant Printing", "Compact", "USB Charging"] },
    { id: 22, name: "Air Purifier", price: "₹125/day", image: airPurifierImg, features: ["HEPA Filter", "Portable", "Silent Operation"] },
    { id: 23, name: "External Hard Drive", price: "₹100/day", image: externalHardDriveImg, features: ["1TB Storage", "USB 3.0", "Portable"] },
    { id: 24, name: "Microphone", price: "₹75/day", image: microphoneImg, features: ["Cardioid Pickup", "USB Powered", "Noise Reduction"] },
    { id: 25, name: "Smart Thermostat", price: "₹150/day", image: smartThermostatImg, features: ["Wi-Fi Enabled", "Voice Control", "Energy Saving"] },
  ]);

  // Function to handle the rent button click
  const handleRent = (gadgetName) => {
    alert(`You have rented the ${gadgetName}!`);
  };

  return (
    <div className="p-6 w-full">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Available Gadgets for Rent</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {gadgets.map((gadget) => (
          <div key={gadget.id} className="bg-white p-6 shadow-lg rounded-lg">
            <img
              src={gadget.image}
              alt={gadget.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold text-blue-500 mt-4">{gadget.name}</h3>
            <p className="text-gray-600">Price: {gadget.price}</p>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-blue-500">Features:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {gadget.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => handleRent(gadget.name)}
                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
              >
                Take Rent
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center bg-blue-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-blue-700">List Your Gadget for Rent</h3>
        <p className="text-gray-700 mt-4">Have a gadget you want to rent out? Submit your listing here!</p>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
          List Your Gadget
        </button>
      </div>
    </div>
  );
};

export default GadgetList;
