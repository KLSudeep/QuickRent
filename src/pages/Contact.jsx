import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className=" p-6 bg-gray-100 w-full">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
          placeholder="Your Email"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
          placeholder="Your Message"
        />
        <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded w-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
