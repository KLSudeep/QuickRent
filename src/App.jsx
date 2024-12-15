import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import GadgetList from "./pages/GadgetList";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-50 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gadgets" element={<GadgetList />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
